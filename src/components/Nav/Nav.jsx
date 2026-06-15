import { useState } from 'react';
import { useLang } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { nav } from '../../data/portfolio';
import styles from './Nav.module.css';

export default function Nav({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const links = nav[lang].links;

  const handleClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#hero" onClick={() => handleClick('hero')}>
          SW.
        </a>

        <div className={styles.right}>
          <ul className={`${styles.links} ${menuOpen ? styles.show : ''}`}>
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  className={`${styles.link} ${activeSection === id ? styles.active : ''}`}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(id);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button className={styles.langBtn} onClick={toggleLang} aria-label="언어 전환">
            {lang === 'ko' ? 'EN' : '한'}
          </button>

          <button
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? '라이트 모드' : '다크 모드'}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="메뉴"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
