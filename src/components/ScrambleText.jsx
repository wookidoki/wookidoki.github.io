import { useEffect, useRef, useState } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/[]{}#$%&*+=';
const DURATION_MS = 900;

// 무작위 문자에서 목표 문자열로 왼쪽부터 해독되듯 바뀌는 텍스트. start가 true일 때, text가 바뀔 때마다 실행.
export default function ScrambleText({ text, start = true, className = '' }) {
  const [out, setOut] = useState(text);
  const raf = useRef(0);

  useEffect(() => {
    if (!start) return undefined;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setOut(text);
      return undefined;
    }
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / DURATION_MS, 1);
      const fixed = Math.floor(p * text.length);
      let s = '';
      for (let i = 0; i < text.length; i += 1) {
        const ch = text[i];
        s += i < fixed || ch === ' ' ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setOut(s);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [text, start]);

  return (
    <span className={className} aria-label={text}>
      <span className="screen-only" aria-hidden>
        {out}
      </span>
      <span className="print-only" aria-hidden>
        {text}
      </span>
    </span>
  );
}
