import { PALETTES, useSettings } from './SettingsContext.jsx';
import { person, tracks } from '../../data/profile.js';
import styles from './TopBar.module.css';

export default function TopBar() {
  const { track, setTrack, palette, setPalette, theme, toggleTheme } = useSettings();
  return (
    <header className={`no-print ${styles.bar}`}>
      <div className={styles.inner}>
        <a href="#summary" className={styles.brand}>
          {person.name}
          <span className={styles.brandSub}>경력기술서</span>
        </a>

        <div className={styles.seg} role="tablist" aria-label="버전 선택">
          {Object.entries(tracks).map(([id, t]) => (
            <button
              key={id}
              role="tab"
              aria-selected={track === id}
              className={`${styles.segBtn} ${track === id ? styles.on : ''}`}
              onClick={() => setTrack(id)}
            >
              {t.label}
            </button>
          ))}
          <span className={styles.segThumb} data-pos={track === 'dev' ? 0 : 1} aria-hidden />
        </div>

        <div className={styles.tools}>
          <div className={styles.palettes} aria-label="색 조합">
            {PALETTES.map((p) => (
              <button
                key={p.id}
                title={p.name}
                aria-label={p.name}
                aria-pressed={palette === p.id}
                className={`${styles.chip} ${palette === p.id ? styles.chipOn : ''}`}
                onClick={() => setPalette(p.id)}
              >
                {p.swatch.map((c) => (
                  <i key={c} style={{ background: c }} />
                ))}
              </button>
            ))}
          </div>
          <button className={styles.icon} onClick={toggleTheme} aria-label="다크모드 전환" title="다크모드">
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button className={styles.icon} onClick={() => window.print()} aria-label="PDF로 저장" title="PDF로 저장">
            ⤓
          </button>
        </div>
      </div>
    </header>
  );
}
