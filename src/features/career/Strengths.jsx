import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import { strengths } from '../../data/career.js';
import styles from './Strengths.module.css';

// 마우스를 따라 카드 안쪽에 빛이 움직이는 스포트라이트 카드
function onMove(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - r.left}px`);
  el.style.setProperty('--my', `${e.clientY - r.top}px`);
}

export default function Strengths() {
  return (
    <Section id="strengths" eyebrow="CORE" title="핵심 역량">
      <div className={styles.grid}>
        {strengths.map((s, i) => (
          <Reveal key={s.key} delay={i * 90} className={styles.card} onPointerMove={onMove}>
            <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.body}>{s.body}</p>
            <ul className={styles.tags}>
              {s.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
