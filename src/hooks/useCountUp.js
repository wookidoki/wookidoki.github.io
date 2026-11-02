import { useEffect, useState } from 'react';

const DURATION_MS = 1400;

// start가 true가 되면 0 → target까지 숫자를 올린다(ease-out).
export function useCountUp(target, start, decimals = 0) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return undefined;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce || target === 0) {
      setV(target);
      return undefined;
    }
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / DURATION_MS, 1);
      const eased = 1 - (1 - p) ** 4;
      setV(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start]);
  return v.toLocaleString('ko-KR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}
