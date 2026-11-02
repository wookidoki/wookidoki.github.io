import { useEffect, useRef, useState } from 'react';
import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import { useSettings } from '../settings/SettingsContext.jsx';
import { experience } from '../../data/career.js';
import styles from './Experience.module.css';

const KIND = { dev: '개발', consult: '컨설팅', biz: '창업' };

// 스크롤 위치만큼 타임라인 선이 차오른다.
function useLineProgress(ref) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const v = (window.innerHeight * 0.6 - r.top) / r.height;
      setP(Math.max(0, Math.min(1, v)));
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => {
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
    };
  }, [ref]);
  return p;
}

function Project({ p, i }) {
  return (
    <Reveal as="article" delay={Math.min(i, 4) * 60} className={styles.pWrap}>
      <div className={styles.project}>
      <header className={styles.pHead}>
        <span className={`${styles.kind} ${styles[p.kind]}`}>{KIND[p.kind]}</span>
        <h4 className={styles.pName}>{p.name}</h4>
        <p className={styles.pMeta}>
          {[p.client, p.period, p.role].filter(Boolean).join('  ·  ')}
        </p>
      </header>
      <ul className={styles.tasks}>
        {p.tasks.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {p.stack.length > 0 && (
        <ul className={styles.stack}>
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}
      </div>
    </Reveal>
  );
}

export default function Experience() {
  const { track } = useSettings();
  const ref = useRef(null);
  const progress = useLineProgress(ref);
  return (
    <Section id="experience" eyebrow="EXPERIENCE" title="경력">
      <div ref={ref} className={styles.timeline}>
        <span className={`no-print ${styles.rail}`} aria-hidden>
          <span className={styles.fill} style={{ transform: `scaleY(${progress})` }} />
        </span>
        {experience.map((c) => {
          const projects = [...c.projects].sort((a, b) => (a.order?.[track] ?? 99) - (b.order?.[track] ?? 99));
          return (
            <div key={c.company} className={styles.company}>
              <Reveal className={styles.cHead}>
                <span className={`no-print ${styles.node}`} aria-hidden />
                <p className={styles.period}>
                  {c.start} – {c.end}
                </p>
                <h3 className={styles.cName}>
                  {c.company}
                  <span className={styles.cEn}>{c.companyEn}</span>
                </h3>
                <p className={styles.cDesc}>
                  {c.desc} · {c.role}
                </p>
              </Reveal>
              <div key={track} className={styles.projects}>
                {projects.map((p, i) => (
                  <Project key={p.name} p={p} i={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
