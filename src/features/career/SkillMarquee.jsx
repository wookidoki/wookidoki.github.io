import Section from '../../components/Section.jsx';
import { skills } from '../../data/career.js';
import styles from './SkillMarquee.module.css';

export default function SkillMarquee() {
  return (
    <Section id="skills" title="기술">
      <ul className={styles.list}>
        {skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </Section>
  );
}
