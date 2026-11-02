import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import { strengths } from '../../data/career.js';
import { tiltHandlers } from '../../hooks/useTilt.js';
import styles from './Strengths.module.css';

export default function Strengths() {
  return (
    <Section id="strengths" eyebrow="CORE" title="핵심 역량">
      <div className={styles.grid}>
        {strengths.map((s, i) => (
          <Reveal key={s.key} delay={i * 90} className={styles.wrap}>
            <div className={styles.card} {...tiltHandlers()}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.body}>{s.body}</p>
              <ul className={styles.tags}>
                {s.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
