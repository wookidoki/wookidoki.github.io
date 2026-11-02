import { useId, useState } from 'react';
import Reveal from '../../components/Reveal.jsx';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ p, index, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  return (
    <Reveal as="li" className={`${styles.card} ${open ? styles.open : ''}`} delay={Math.min(index, 6) * 50}>
      <button className={styles.head} onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls={panelId}>
        <span className={styles.idx}>{String(index).padStart(2, '0')}</span>
        <span className={styles.titleWrap}>
          <span className={styles.title}>{p.title}</span>
          <span className={styles.meta}>
            {p.client} · {p.period}
          </span>
        </span>
        <span className={styles.peek}>{p.results[0].v}</span>
        <span className={styles.plus} aria-hidden />
      </button>

      <div id={panelId} className={styles.panel} role="region">
        <div className={styles.panelInner}>
          <div className={styles.body}>
            <p className={styles.role}>{p.role}</p>
            <h4 className={styles.h}>문제</h4>
            <p className={styles.text}>{p.problem}</p>
            <h4 className={styles.h}>한 일</h4>
            <ul className={styles.actions}>
              {p.actions.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <h4 className={styles.h}>결과</h4>
            <dl className={styles.results}>
              {p.results.map((r) => (
                <div key={r.k} className={styles.result}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <ul className={styles.stack}>
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
