import Section from '../../components/Section.jsx';
import { skills } from '../../data/career.js';
import styles from './SkillMarquee.module.css';

export default function SkillMarquee() {
  return (
    <Section id="skills" title="기술">
      <p className={styles.list}>{skills.join(' · ')}</p>
    </Section>
  );
}
