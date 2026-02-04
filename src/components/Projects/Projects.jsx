import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import { projects, sectionTitles, projectsFilter, detailLabels } from '../../data/portfolio';
import styles from './Projects.module.css';

const categoryKeys = ['all', 'Web', 'Data Science', 'Research'];

export default function Projects() {
  const { lang } = useLang();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const heading = sectionTitles[lang].projects;
  const filterLabels = projectsFilter[lang];
  const l = detailLabels[lang];

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.filters}>
          {categoryKeys.map((key) => (
            <button
              key={key}
              className={`${styles.filterBtn} ${filter === key ? styles.filterActive : ''}`}
              onClick={() => setFilter(key)}
            >
              {filterLabels[key]}
            </button>
          ))}
        </div>
        <div className={styles.grid}>
          {filtered.map((project) => (
            <article
              key={project.id}
              className={styles.card}
              onClick={() => navigate(`/project/${project.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/project/${project.id}`)}
            >
              <div className={styles.cardBody}>
                <span className={styles.category}>
                  {filterLabels[project.category]}
                </span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.subtitle}>{project[lang].subtitle}</p>
                <p className={styles.desc}>{project[lang].description}</p>
                <div className={styles.techs}>
                  {project.techs.map((t) => (
                    <span key={t} className={styles.tech}>{t}</span>
                  ))}
                </div>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.viewDetail}>
                  {l.viewDetail}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
