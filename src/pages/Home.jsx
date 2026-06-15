import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Container from '../components/ui/Container';
import { useLang } from '../context/LanguageContext';
import { projects } from '../data/portfolio';
import styles from './Home.module.css';

export default function Home() {
  const { lang } = useLang();
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />

      <section id="work" className={styles.section}>
        <Container>
          <div className={styles.head}>
            <span className={styles.eyebrow}>SELECTED WORK</span>
            <h2 className={styles.title}>{lang === 'ko' ? '대표 프로젝트' : 'Selected Work'}</h2>
            <Link to="/projects" className={styles.more}>
              {lang === 'ko' ? '전체 보기 →' : 'View all →'}
            </Link>
          </div>

          <ul className={styles.workList}>
            {featured.map((p) => (
              <li key={p.id}>
                <Link to={`/project/${p.id}`} className={styles.workItem}>
                  <span className={styles.workCat}>{p.category}</span>
                  <h3 className={styles.workTitle}>{p.title}</h3>
                  <p className={styles.workSub}>{p[lang].subtitle}</p>
                  <span className={styles.workArrow} aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className={styles.cta}>
        <Container>
          <h2 className={styles.ctaTitle}>
            {lang === 'ko' ? '함께 일할 준비가 되어 있습니다' : "Let's work together"}
          </h2>
          <div className={styles.ctaLinks}>
            <Link to="/resume" className={styles.ctaBtn}>
              {lang === 'ko' ? '이력서 보기' : 'View Resume'}
            </Link>
            <Link to="/contact" className={styles.ctaBtnGhost}>
              {lang === 'ko' ? '연락하기' : 'Get in touch'}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
