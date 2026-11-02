import { useSettings } from '../settings/SettingsContext.jsx';
import { tracks } from '../../data/profile.js';
import { useInView } from '../../hooks/useInView.js';
import { useCountUp } from '../../hooks/useCountUp.js';
import styles from './Metrics.module.css';

function Metric({ m, start, delay }) {
  const v = useCountUp(m.value, start, m.decimals || 0);
  return (
    <li className={`${styles.item} ${start ? styles.in : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={styles.value}>
        {v}
        <span className={styles.suffix}>{m.suffix}</span>
      </div>
      <div className={styles.label}>{m.label}</div>
      <div className={styles.note}>{m.note}</div>
    </li>
  );
}

export default function Metrics() {
  const { track } = useSettings();
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <ul ref={ref} key={track} className={styles.grid}>
      {tracks[track].metrics.map((m, i) => (
        <Metric key={m.label} m={m} start={inView} delay={i * 90} />
      ))}
    </ul>
  );
}
