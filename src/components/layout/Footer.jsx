import { NavLink } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import { nav, contactData } from '../../data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  const { lang } = useLang();
  const links = nav[lang].links;
  const tagline =
    lang === 'ko'
      ? 'EPC 도메인 IT 컨설턴트 · 풀스택 개발자'
      : 'EPC Domain IT Consultant · Full-Stack Developer';

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <NavLink to="/" className={styles.logo}>
              SW.
            </NavLink>
            <p className={styles.tagline}>{tagline}</p>
          </div>

          <nav className={styles.nav}>
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className={styles.navLink}>
                {label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.contact}>
            <a href={contactData.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} 이승욱 (Seungwook Lee)</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
