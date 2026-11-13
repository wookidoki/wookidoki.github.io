import { useSettings } from '../settings/SettingsContext.jsx';
import { highlights, person, tracks } from '../../data/career.js';
import styles from './Hero.module.css';

export default function Hero() {
  const { track } = useSettings();
  const t = tracks[track];

  return (
    <section id="top" className={styles.hero}>
      <div className={`no-print ${styles.bgGrid}`} aria-hidden />
      <div className={`no-print ${styles.bgGlow}`} aria-hidden />

      <div className={styles.inner}>
        <div className={styles.text}>
          <p key={`r-${track}`} className={styles.roles}>
            {t.roles.map((r) => (
              <span key={r}>{r}</span>
            ))}
          </p>
          <h1 key={track} className={styles.title}>
            <span className={styles.line1}>{t.headline[0]}</span>
            <span className={styles.line2}>{t.headline[1]}</span>
          </h1>
          <p key={`s-${track}`} className={styles.summary}>
            {t.summary}
          </p>
          <div className={styles.cta}>
            <a href="#featured" className={styles.primary}>
              대표 프로젝트 보기 <span aria-hidden>→</span>
            </a>
            <a href={`mailto:${person.email}`} className={styles.ghost}>
              {person.email}
            </a>
            <a href={person.github} target="_blank" rel="noreferrer" className={styles.ghost}>
              GitHub
            </a>
          </div>
        </div>

        <figure className={styles.photoWrap}>
          <img className={styles.photo} src={person.photo} alt={`${person.name} 사진`} />
        </figure>
      </div>

      <div className={styles.statsWrap}>
        <ul className={styles.stats}>
          {highlights.map((h) => (
            <li key={h.label}>
              <strong>{h.value}</strong>
              <span>{h.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
