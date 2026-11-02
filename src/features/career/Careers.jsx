import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import { careers } from '../../data/profile.js';
import { ym } from './tenure.js';
import styles from './Careers.module.css';

export default function Careers() {
  return (
    <Section id="career" index={1} title="경력">
      <ol className={styles.list}>
        {careers.map((c, i) => (
          <Reveal as="li" key={c.company} delay={i * 80} className={styles.item}>
            <div className={styles.when}>
              <span className={styles.period}>
                {ym(c.start)} – {c.end ? ym(c.end) : '재직 중'}
              </span>
            </div>
            <div>
              <h3 className={styles.company}>
                {c.company}
                <span className={styles.type}>{c.type}</span>
              </h3>
              <p className={styles.role}>{c.role}</p>
              <ul className={styles.lines}>
                {c.lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
