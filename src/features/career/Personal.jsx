import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import { personal } from '../../data/career.js';
import styles from './Experience.module.css';
import own from './Personal.module.css';
import { tiltHandlers } from '../../hooks/useTilt.js';

export default function Personal() {
  return (
    <Section id="personal" eyebrow="SIDE PROJECTS" title="개인 프로젝트">
      <div className={styles.projects}>
        {personal.map((p, i) => (
          <Reveal as="article" key={p.name} delay={i * 80} className={styles.pWrap}>
            <div className={`${styles.project} ${own.card}`} {...tiltHandlers()}>
            <h4 className={styles.pName}>{p.name}</h4>
            <p className={styles.pMeta}>
              {p.period} · {p.role}
            </p>
            <ul className={styles.tasks}>
              {p.tasks.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <ul className={styles.stack}>
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
              {p.link && (
                <li>
                  <a href={p.link} target="_blank" rel="noreferrer" className={own.link}>
                    GitHub ↗
                  </a>
                </li>
              )}
            </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
