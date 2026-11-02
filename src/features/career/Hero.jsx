import { useEffect, useState } from 'react';
import NeuralField from '../../components/NeuralField.jsx';
import ScrambleText from '../../components/ScrambleText.jsx';
import { useSettings } from '../settings/SettingsContext.jsx';
import { person, tracks } from '../../data/career.js';
import styles from './Hero.module.css';

const ROTATE_MS = 3200;

export default function Hero() {
  const { track } = useSettings();
  const t = tracks[track];
  const [ri, setRi] = useState(0);

  useEffect(() => {
    setRi(0);
    const id = setInterval(() => setRi((v) => v + 1), ROTATE_MS);
    return () => clearInterval(id);
  }, [track]);

  return (
    <section id="top" className={styles.hero}>
      <NeuralField />
      <div className={`no-print ${styles.orb} ${styles.orbA}`} aria-hidden />
      <div className={`no-print ${styles.orb} ${styles.orbB}`} aria-hidden />
      <div className={`no-print ${styles.grid}`} aria-hidden />

      <div className={styles.inner}>
        <p className={styles.kicker}>
          <span className={styles.dot} aria-hidden />
          NOW · 디티솔루션 재직 중
        </p>
        <h1 key={track} className={styles.title}>
          <span className={styles.line1}>{t.headline[0]}</span>
          <span className={`grad-text ${styles.line2}`}>{t.headline[1]}</span>
        </h1>
        <p className={styles.role}>
          <span className={styles.bracket}>[</span>
          <ScrambleText text={t.roles[ri % t.roles.length]} />
          <span className={styles.bracket}>]</span>
        </p>
        <p key={`s-${track}`} className={styles.summary}>
          {t.summary}
        </p>
        <div className={styles.cta}>
          <a href="#experience" className={styles.primary}>
            경력 보기 <span aria-hidden>↓</span>
          </a>
          <a href={`mailto:${person.email}`} className={styles.ghost}>
            {person.email}
          </a>
          <a href={person.github} target="_blank" rel="noreferrer" className={styles.ghost}>
            GitHub ↗
          </a>
        </div>
      </div>

      <div className={`no-print ${styles.ticker}`} aria-hidden>
        <span>NEXT.JS</span>
        <span>TYPESCRIPT</span>
        <span>POSTGRESQL</span>
        <span>ORACLE PRIMAVERA UNIFIER</span>
        <span>REST API</span>
        <span>PYTHON</span>
        <span>AWP</span>
      </div>
    </section>
  );
}
