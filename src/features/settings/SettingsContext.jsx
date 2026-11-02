import { createContext, useContext, useEffect, useMemo, useState } from 'react';

// 트랙(개발/컨설팅) · 색 조합 · 다크모드. URL ?track=consult 가 있으면 우선, 나머지는 브라우저에 기억.
export const PALETTES = [
  { id: 'persimmon', name: '페이퍼 & 퍼시먼', swatch: ['#f5f2ec', '#1d1c1a', '#d9502f'] },
  { id: 'teal', name: '스톤 & 딥틸', swatch: ['#f1f2ef', '#18201f', '#1f5c63'] },
  { id: 'plum', name: '아이보리 & 플럼', swatch: ['#f7f4f0', '#1e1a1d', '#6b2d5c'] },
];
const TRACKS = ['dev', 'consult'];
const KEY = 'career-settings-v1';

function read() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch {
    return {};
  }
}

function initial() {
  const saved = read();
  const q = new URLSearchParams(window.location.search).get('track');
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  return {
    track: TRACKS.includes(q) ? q : TRACKS.includes(saved.track) ? saved.track : 'dev',
    palette: PALETTES.some((p) => p.id === saved.palette) ? saved.palette : 'persimmon',
    theme: saved.theme === 'dark' || saved.theme === 'light' ? saved.theme : prefersDark ? 'dark' : 'light',
  };
}

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [state, setState] = useState(initial);

  useEffect(() => {
    const el = document.documentElement;
    el.dataset.palette = state.palette;
    el.dataset.theme = state.theme;
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* 저장 불가 환경은 무시 */
    }
    const url = new URL(window.location.href);
    url.searchParams.set('track', state.track);
    window.history.replaceState(null, '', url);
  }, [state]);

  const value = useMemo(
    () => ({
      ...state,
      setTrack: (track) => setState((s) => ({ ...s, track })),
      setPalette: (palette) => setState((s) => ({ ...s, palette })),
      toggleTheme: () => setState((s) => ({ ...s, theme: s.theme === 'dark' ? 'light' : 'dark' })),
    }),
    [state],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings는 SettingsProvider 안에서만 쓸 수 있습니다');
  return ctx;
}
