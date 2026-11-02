import { useEffect, useState } from 'react';
import { useSettings } from './SettingsContext.jsx';
import { person, tracks } from '../../data/career.js';
import styles from './TopBar.module.css';

const LINKS = [
  { id: 'strengths', label: '역량' },
  { id: 'experience', label: '경력' },
  { id: 'personal', label: '프로젝트' },
  { id: 'research', label: '연구' },
  { id: 'education', label: '학력' },
];

export default function TopBar() {
  const { track, setTrack } = useSettings();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className={`no-print ${styles.bar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          <span className={styles.mark} aria-hidden />
          {person.name}
        </a>
        <nav className={styles.links}>
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className={styles.right}>
          <div className={styles.seg} role="tablist" aria-label="버전">
            {Object.entries(tracks).map(([id, t]) => (
              <button
                key={id}
                role="tab"
                aria-selected={track === id}
                className={track === id ? styles.on : ''}
                onClick={() => setTrack(id)}
              >
                {t.label}
              </button>
            ))}
            <span className={styles.thumb} data-pos={track === 'dev' ? 0 : 1} aria-hidden />
          </div>
          <button className={styles.pdf} onClick={() => window.print()}>
            PDF
          </button>
        </div>
      </div>
      <span className={styles.progress} style={{ transform: `scaleX(${progress})` }} aria-hidden />
    </header>
  );
}
