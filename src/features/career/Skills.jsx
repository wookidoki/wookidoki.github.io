import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import { skills } from '../../data/profile.js';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <Section id="skills" index={3} title="기술">
      <dl className={styles.grid}>
        {skills.map((s, i) => (
          <Reveal key={s.group} className={styles.row} delay={i * 60}>
            <dt className={styles.group}>{s.group}</dt>
            <dd className={styles.items}>
              {s.items.map((it) => (
                <span key={it} className={styles.item}>
                  {it}
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
