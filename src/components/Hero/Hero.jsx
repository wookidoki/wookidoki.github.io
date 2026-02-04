import { useLang } from '../../context/LanguageContext';
import { profile } from '../../data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  const { lang } = useLang();
  const t = profile[lang];

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>{t.greeting}</p>
        <h1 className={styles.name}>
          {t.namePrefix}<span className={styles.nameKo}>{t.name}</span>{t.nameSuffix}
        </h1>
        <div className={styles.keywords}>
          {profile.keywords.map((kw) => (
            <span key={kw} className={styles.tag}>{kw}</span>
          ))}
        </div>
      </div>
      <a href="#about" className={styles.scrollDown} aria-label="아래로 스크롤">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}
