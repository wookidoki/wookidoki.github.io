import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLang } from '../../context/LanguageContext';
import { projects, detailLabels, projectsFilter } from '../../data/portfolio';
import ProjectCharts from './ProjectCharts';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang, toggleLang } = useLang();
  const l = detailLabels[lang];
  const filterLabels = projectsFilter[lang];

  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>프로젝트를 찾을 수 없습니다.</p>
        <button onClick={() => navigate('/')}>{l.back}</button>
      </div>
    );
  }

  const t = project[lang];
  const detail = t.detail;

  return (
    <div className={styles.page}>
      <nav className={styles.topNav}>
        <button className={styles.backBtn} onClick={() => navigate('/#projects')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {l.back}
        </button>
        <button className={styles.langBtn} onClick={toggleLang}>
          {lang === 'ko' ? 'EN' : '한'}
        </button>
      </nav>

      <header className={styles.header}>
        <span className={styles.category}>{filterLabels[project.category]}</span>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
        {project.period && <span className={styles.period}>{project.period}</span>}
        <div className={styles.links}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.liveBtn}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
              {l.liveDemo}
            </a>
          )}
        </div>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{l.overview}</h2>
          <p className={styles.text}>{detail.overview}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{l.background}</h2>
          <p className={styles.text}>{detail.background}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{l.role}</h2>
          <p className={styles.roleText}>{detail.role}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{l.highlights}</h2>
          <ul className={styles.highlights}>
            {detail.highlights.map((h, i) => (
              <li key={i} className={styles.highlightItem}>{h}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{l.techStack}</h2>
          <div className={styles.techs}>
            {project.techs.map((tech) => (
              <span key={tech} className={styles.techTag}>{tech}</span>
            ))}
          </div>
        </section>

        {project.chartData && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              {lang === 'ko' ? '데이터 시각화' : 'Data Visualization'}
            </h2>
            <ProjectCharts chartData={project.chartData} lang={lang} />
          </section>
        )}
      </main>
    </div>
  );
}
