import { useMemo } from 'react';
import Section from '../../components/Section.jsx';
import { useSettings } from '../settings/SettingsContext.jsx';
import { projects } from '../../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import styles from './ProjectList.module.css';

const FEATURED = 4; // 대표 프로젝트 수. 나머지는 '그 밖의 업무'로 접어 둔다.

export default function ProjectList() {
  const { track } = useSettings();
  const list = useMemo(
    () => projects.filter((p) => p.order[track]).sort((a, b) => a.order[track] - b.order[track]),
    [track],
  );
  const main = list.slice(0, FEATURED);
  const rest = list.slice(FEATURED);
  return (
    <Section id="projects" index={2} title="프로젝트">
      <h3 className={styles.sub}>대표 프로젝트</h3>
      <ol key={`m-${track}`} className={styles.list}>
        {main.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i + 1} defaultOpen />
        ))}
      </ol>
      {rest.length > 0 && (
        <>
          <h3 className={`${styles.sub} ${styles.subRest}`}>그 밖의 업무</h3>
          <ol key={`r-${track}`} className={styles.list}>
            {rest.map((p, i) => (
              <ProjectCard key={p.id} p={p} index={FEATURED + i + 1} />
            ))}
          </ol>
        </>
      )}
    </Section>
  );
}
