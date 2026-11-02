import NeuralField from '../../components/NeuralField.jsx';
import { useSettings } from '../settings/SettingsContext.jsx';
import { person, tracks } from '../../data/career.js';
import { useTyping } from '../../hooks/useTyping.js';
import styles from './Hero.module.css';

export default function Hero() {
  const { track } = useSettings();
  const t = tracks[track];
  const typed = useTyping(t.roles);
  return (
    <section id="top" className={styles.hero}>
      <NeuralField />
      <div className={`no-print ${styles.orb} ${styles.orbA}`} aria-hidden />
      <div className={`no-print ${styles.orb} ${styles.orbB}`} aria-hidden />
      <div className={`no-print ${styles.grid}`} aria-hidden />

      <div className={styles.inner}>
        <p className={styles.kicker}>
          <span className={styles.dot} aria-hidden />
          {person.nameEn} · CAREER PORTFOLIO
        </p>
        <h1 key={track} className={styles.title}>
          <span>{t.headline[0]}</span>
          <span className="grad-text">{t.headline[1]}</span>
        </h1>
        <p className={styles.role}>
          <span className={styles.prompt}>&gt;</span>
          <span>{typed}</span>
          <span className={styles.caret} aria-hidden />
        </p>
        <p key={`s-${track}`} className={styles.summary}>
          {t.summary}
        </p>
        <div className={styles.cta}>
          <a href="#experience" className={styles.primary}>
            경력 보기
          </a>
          <a href={`mailto:${person.email}`} className={styles.ghost}>
            {person.email}
          </a>
          <a href={person.github} target="_blank" rel="noreferrer" className={styles.ghost}>
            GitHub
          </a>
        </div>
      </div>

      <a href="#strengths" className={`no-print ${styles.scroll}`} aria-label="아래로">
        <span />
      </a>
    </section>
  );
}
