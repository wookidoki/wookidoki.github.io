import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import { awards, education } from '../../data/profile.js';
import styles from './Education.module.css';

function Rows({ title, rows }) {
  return (
    <Reveal className={styles.block}>
      <h3 className={styles.h}>{title}</h3>
      <ul className={styles.list}>
        {rows.map((r) => (
          <li key={r.name} className={styles.row}>
            <span className={styles.period}>{r.period}</span>
            <span>
              <strong className={styles.name}>{r.name}</strong>
              <span className={styles.detail}>{r.detail}</span>
            </span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Education() {
  return (
    <Section id="education" index={4} title="학력 · 수상">
      <div className={styles.cols}>
        <Rows title="학력 · 교육" rows={education.map((e) => ({ name: e.school, detail: e.detail, period: e.period }))} />
        <Rows title="수상 · 자격" rows={awards.map((a) => ({ name: a.name, detail: a.org, period: a.period }))} />
      </div>
    </Section>
  );
}
