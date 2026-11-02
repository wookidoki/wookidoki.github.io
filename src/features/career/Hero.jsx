import { useSettings } from '../settings/SettingsContext.jsx';
import { person, tracks } from '../../data/profile.js';
import styles from './Hero.module.css';

export default function Hero() {
  const { track } = useSettings();
  const t = tracks[track];
  return (
    <section id="summary" className={styles.hero}>
      <div className={styles.top}>
        <div>
          <p className={styles.eyebrow}>
            {person.nameEn} · {t.label} 버전
          </p>
          <h1 className={styles.name}>{person.name}</h1>
          <p key={track} className={styles.role}>
            {t.role}
          </p>
        </div>
        <img className={styles.photo} src={person.photo} alt={`${person.name} 사진`} />
      </div>
      <div key={track} className={styles.summary}>
        {t.summary.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <ul className={styles.contact}>
        <li>
          <a href={`mailto:${person.email}`}>{person.email}</a>
        </li>
        <li>
          <a href={person.github} target="_blank" rel="noreferrer">
            github.com/wookidoki
          </a>
        </li>
      </ul>
    </section>
  );
}
