import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import { featured } from '../../data/career.js';
import styles from './Featured.module.css';

function Visual({ p }) {
  if (p.image) {
    return (
      <div className={styles.shot}>
        <img src={p.image} alt={`${p.name} 화면`} loading="lazy" />
      </div>
    );
  }
  return (
    <div className={`${styles.shot} ${styles.diagram}`} aria-label={`${p.name} 처리 흐름`}>
      <ol>
        {p.diagram.map((step, i) => (
          <li key={step}>
            <span className={styles.stepNo}>{i + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Featured() {
  return (
    <Section
      id="featured"
      title="대표 프로젝트"
      lead="고객 현장의 데이터와 시스템을 AI 에이전트, 3D 시각화, 자동화 파이프라인으로 연결한 작업입니다."
    >
      <div className={styles.grid}>
        {featured.map((p, i) => (
          <Reveal as="article" key={p.key} delay={(i % 2) * 90} className={styles.wrap}>
            <div className={styles.card}>
              <Visual p={p} />
              <div className={styles.body}>
                <p className={styles.tag}>{p.tag}</p>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.desc}>{p.desc}</p>
                <ul className={styles.stack}>
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                {p.link && (
                  <a className={`no-print ${styles.link}`} href={p.link} target="_blank" rel="noreferrer">
                    직접 보기 <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
