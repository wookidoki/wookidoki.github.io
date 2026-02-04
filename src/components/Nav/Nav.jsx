import { useState } from 'react';
import { useLang } from '../../context/LanguageContext';
import { nav } from '../../data/portfolio';
import styles from './Nav.module.css';

export default function Nav({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLang();
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
