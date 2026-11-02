import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import { awards, education } from '../../data/career.js';
import styles from './Education.module.css';

function List({ title, rows }) {
  return (
    <Reveal className={styles.col}>
      <h3 className={styles.h}>{title}</h3>
      <ul className={styles.list}>
        {rows.map((r) => (
          <li key={r.name} className={styles.row}>
            <span className={styles.period}>{r.period}</span>
            <strong className={styles.name}>{r.name}</strong>
            <span className={styles.detail}>{r.detail}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Education() {
  return (
    <Section id="education" eyebrow="EDUCATION · AWARDS" title="학력 · 수상">
      <div className={styles.cols}>
        <List title="학력 · 활동" rows={education} />
        <List title="수상 · 자격" rows={awards} />
      </div>
    </Section>
  );
}
