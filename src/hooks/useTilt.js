// 카드를 마우스 방향으로 기울이고 스포트라이트 위치(--mx, --my)를 넘긴다. 이벤트 핸들러 묶음을 돌려준다.
const MAX_DEG = 6;

export function tiltHandlers() {
  const fine = typeof window !== 'undefined' && window.matchMedia?.('(pointer: fine)').matches;
  if (!fine) return {};
  return {
    onPointerMove(e) {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty('--mx', `${px * 100}%`);
      el.style.setProperty('--my', `${py * 100}%`);
      el.style.setProperty('--rx', `${(0.5 - py) * MAX_DEG}deg`);
      el.style.setProperty('--ry', `${(px - 0.5) * MAX_DEG}deg`);
    },
    onPointerLeave(e) {
      const el = e.currentTarget;
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    },
  };
}
