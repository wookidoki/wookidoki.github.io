import { useMemo } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy.js';
import styles from './SideNav.module.css';

export default function SideNav({ sections }) {
  const ids = useMemo(() => sections.map((s) => s.id), [sections]);
  const active = useScrollSpy(ids);
  return (
    <nav className={`no-print ${styles.nav}`} aria-label="목차">
      <ol className={styles.list}>
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className={`${styles.link} ${active === s.id ? styles.active : ''}`}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
