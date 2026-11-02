import { useSettings } from '../settings/SettingsContext.jsx';
import { person, tracks } from '../../data/career.js';
import styles from './Hero.module.css';

export default function Hero() {
  const { track } = useSettings();
  const t = tracks[track];

  return (
    <section id="top" className={styles.hero}>

      <div className={styles.inner}>
        <div className={styles.text}>
          <h1 key={track} className={styles.title}>
            <span className={styles.line1}>{t.headline[0]}</span>
            <span className={`grad-text ${styles.line2}`}>{t.headline[1]}</span>
          </h1>
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

        <figure className={styles.photoWrap}>
          <img className={styles.photo} src={person.photo} alt={`${person.name} 사진`} />
        </figure>
      </div>
    </section>
  );
}
