import { createContext, useContext, useEffect, useMemo, useState } from 'react';

// 버전(개발/컨설팅)만 관리. URL ?track=consult 우선, 그다음 브라우저에 기억한 값.
const TRACKS = ['dev', 'consult'];
const KEY = 'career-track-v2';

function initial() {
  const q = new URLSearchParams(window.location.search).get('track');
  if (TRACKS.includes(q)) return q;
  try {
    const saved = localStorage.getItem(KEY);
    if (TRACKS.includes(saved)) return saved;
  } catch {
    /* 저장소 접근 불가 환경 */
  }
  return 'dev';
}

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [track, setTrack] = useState(initial);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, track);
    } catch {
      /* 무시 */
    }
    const url = new URL(window.location.href);
    url.searchParams.set('track', track);
    window.history.replaceState(null, '', url);
  }, [track]);

  const value = useMemo(() => ({ track, setTrack }), [track]);
  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings는 SettingsProvider 안에서만 쓸 수 있습니다');
  return ctx;
}
