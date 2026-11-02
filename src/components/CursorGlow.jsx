import { useEffect, useRef } from 'react';
import styles from './CursorGlow.module.css';

// 마우스를 부드럽게 따라오는 화면 전체 광원. 터치 기기·움직임 최소화 설정에서는 끈다.
export default function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const fine = window.matchMedia?.('(pointer: fine)').matches;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return undefined;
    const el = ref.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 3;
    let tx = x;
    let ty = y;
    let raf = 0;
    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      el.style.opacity = '1';
    };
    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);
  return <div ref={ref} className={`no-print ${styles.glow}`} aria-hidden />;
}
