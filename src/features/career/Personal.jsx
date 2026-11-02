import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import styles from './Experience.module.css';
import own from './Personal.module.css';

// 개인 프로젝트·연구 공용 카드 목록
export default function CardList({ id, eyebrow, title, items }) {
  return (
    <Section id={id} eyebrow={eyebrow} title={title}>
      <div className={styles.projects}>
        {items.map((p, i) => (
          <Reveal as="article" key={p.name} delay={i * 80} className={styles.pWrap}>
            <div className={`${styles.project} ${own.card}`}>
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
