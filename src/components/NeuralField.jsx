import { useEffect, useRef } from 'react';
import styles from './NeuralField.module.css';

// 신경망처럼 이어지는 입자 배경. 마우스 근처 노드가 끌려오고 연결선이 밝아진다.
// 화면 밖이거나 탭이 숨겨지면 멈춘다. 움직임 최소화 설정이면 한 장면만 그린다.
const LINK_DIST = 130;
const MOUSE_DIST = 160;
const DENSITY = 26000; // 픽셀 면적당 노드 1개

export default function NeuralField() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    let nodes = [];
    let raf = 0;
    let running = true;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(80, Math.max(28, Math.floor((w * h) / DENSITY)));
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
        hue: Math.random(),
      }));
    };

    const color = (t, a) => {
      // 시안(190) → 바이올렛(255) 사이 색상
      const hue = 190 + t * 65;
      return `hsla(${hue}, 100%, 66%, ${a})`;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of nodes) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d = Math.hypot(dx, dy);
        if (d < MOUSE_DIST) {
          p.vx += (dx / d) * 0.004;
          p.vy += (dy / d) * 0.004;
        }
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.x += p.vx + Math.sin(p.hue * 6.28 + performance.now() / 4000) * 0.08;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DIST) {
            const near = Math.hypot(mouse.x - a.x, mouse.y - a.y) < MOUSE_DIST;
            ctx.strokeStyle = color((a.hue + b.hue) / 2, (1 - d / LINK_DIST) * (near ? 0.32 : 0.14));
            ctx.lineWidth = near ? 1 : 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of nodes) {
        ctx.fillStyle = color(p.hue, 0.7);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      if (!running) return;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const io = new IntersectionObserver(([e]) => {
      running = e.isIntersecting && !document.hidden && !reduce;
      cancelAnimationFrame(raf);
      if (running) loop();
    });

    resize();
    draw();
    io.observe(canvas);
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={ref} className={`no-print ${styles.canvas}`} aria-hidden />;
}
