import { useLang } from '../../context/LanguageContext';
import {
  profile,
  education,
  career,
  certifications,
  skills,
  projects,
  contactData,
} from '../../data/portfolio';
import styles from './Resume.module.css';

export default function Resume() {
  const { lang, toggleLang } = useLang();
  const p = profile[lang];
  const email = contactData.email;
  const github = 'github.com/wookidoki';

  const handlePrint = () => window.print();

  return (
    <div className={styles.page}>
      {/* 상단 컨트롤 (인쇄 시 숨김) */}
      <div className={styles.controls}>
        <button onClick={toggleLang} className={styles.langBtn}>
          {lang === 'ko' ? 'EN' : '한'}
        </button>
        <button onClick={handlePrint} className={styles.printBtn}>
          {lang === 'ko' ? 'PDF 저장' : 'Save PDF'}
        </button>
      </div>

      {/* A4 용지 */}
      <div className={styles.paper}>
        {/* 헤더 */}
        <header className={styles.header}>
          <h1 className={styles.name}>{p.name}</h1>
          <div className={styles.contact}>
            <span>{email}</span>
            <span className={styles.sep}>|</span>
            <span>{github}</span>
          </div>
        </header>

        {/* 자기소개 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{lang === 'ko' ? '자기소개' : 'About'}</h2>
          <p className={styles.about}>{p.about}</p>
        </section>

        {/* 학력 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{lang === 'ko' ? '학력' : 'Education'}</h2>
          <table className={styles.table}>
            <tbody>
              {education.map((edu, i) => (
                <tr key={i}>
                  <td className={styles.tdPeriod}>{edu[lang].period}</td>
                  <td>
                    <strong>{edu[lang].school}</strong>
                    <span className={styles.sub}> · {edu[lang].major}</span>
                    {edu.gpa && <span className={styles.sub}> · GPA {edu.gpa}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 경력 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{lang === 'ko' ? '경력' : 'Experience'}</h2>
          <table className={styles.table}>
            <tbody>
              {career.map((c, i) => (
                <tr key={i}>
                  <td className={styles.tdPeriod}>{c[lang].period}</td>
                  <td>
                    <strong>{c[lang].company}</strong>
                    <span className={styles.sub}> · {c[lang].role}</span>
                    <p className={styles.desc}>{c[lang].description}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 기술 스택 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{lang === 'ko' ? '기술 스택' : 'Skills'}</h2>
          <div className={styles.skillsGrid}>
            {skills.map((group) => (
              <div key={group.category} className={styles.skillRow}>
                <span className={styles.skillCat}>{group.category}</span>
                <span className={styles.skillItems}>{group.items.join(' · ')}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 자격/수상 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{lang === 'ko' ? '자격 및 수상' : 'Certifications & Awards'}</h2>
          <table className={styles.table}>
            <tbody>
              {certifications.map((cert, i) => (
                <tr key={i}>
                  <td className={styles.tdPeriod}>{cert[lang].period}</td>
                  <td>
                    <strong>{cert[lang].name}</strong>
                    <span className={styles.sub}> · {cert[lang].detail}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 프로젝트 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{lang === 'ko' ? '프로젝트' : 'Projects'}</h2>
          <div className={styles.projects}>
            {projects.slice(0, 6).map((proj) => (
              <div key={proj.id} className={styles.projItem}>
                <div className={styles.projHeader}>
                  <strong>{proj.title}</strong>
                  <span className={styles.projPeriod}>{proj.period}</span>
                </div>
                <p className={styles.projDesc}>{proj[lang].subtitle}</p>
                <p className={styles.projTechs}>{proj.techs.slice(0, 6).join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
