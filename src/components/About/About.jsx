import { useLang } from '../../context/LanguageContext';
import { profile, education, career, certifications, sectionTitles } from '../../data/portfolio';
import profileImg from '../../data/imgs/leeseongwook.jpg';
import styles from './About.module.css';

export default function About() {
  const { lang } = useLang();
  const t = profile[lang];
  const heading = sectionTitles[lang].about;

  const labels = {
    ko: { education: '학력', career: '경력', cert: '자격 / 수상', training: '교육', certificate: '자격증', award: '수상' },
    en: { education: 'Education', career: 'Career', cert: 'Certifications & Awards', training: 'Training', certificate: 'Certificate', award: 'Award' },
  };
  const l = labels[lang];

  const typeIcon = { training: '📚', certificate: '📄', award: '🏆' };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{heading}</h2>

        <div className={styles.top}>
          <div className={styles.photoWrap}>
            <img src={profileImg} alt="이승욱 프로필" className={styles.photo} />
          </div>
          <div className={styles.intro}>
            <p className={styles.bio}>{t.about}</p>
          </div>
        </div>

        {/* 학력 + 경력 2분할 */}
        <div className={styles.twoCol}>
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>{l.education}</h3>
            <div className={styles.timeline}>
              {education.map((edu, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timeDot} />
                  <div className={styles.timeContent}>
                    <h4 className={styles.itemTitle}>{edu[lang].school}</h4>
                    <p className={styles.itemSub}>{edu[lang].major}{edu.gpa ? ` | GPA ${edu.gpa}` : ''}</p>
                    <span className={styles.period}>{edu[lang].period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>{l.career}</h3>
            <div className={styles.timeline}>
              {career.map((c, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timeDot} />
                  <div className={styles.timeContent}>
                    <h4 className={styles.itemTitle}>{c[lang].company}</h4>
                    <p className={styles.itemSub}>{c[lang].role}</p>
                    <p className={styles.itemDesc}>{c[lang].description}</p>
                    <span className={styles.period}>{c[lang].period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 자격 / 수상 */}
        <div className={styles.sections}>
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>{l.cert}</h3>
            <div className={styles.certGrid}>
              {certifications.map((cert, i) => (
                <div key={i} className={styles.certCard}>
                  <span className={styles.certIcon}>{typeIcon[cert.type]}</span>
                  <div>
                    <span className={styles.certType}>{l[cert.type]}</span>
                    <h4 className={styles.certName}>{cert[lang].name}</h4>
                    <p className={styles.certDetail}>{cert[lang].detail}</p>
                    <span className={styles.period}>{cert[lang].period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
