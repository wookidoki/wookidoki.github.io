import TopBar from './features/settings/TopBar.jsx';
import Hero from './features/career/Hero.jsx';
import Strengths from './features/career/Strengths.jsx';
import Experience from './features/career/Experience.jsx';
import CardList from './features/career/Personal.jsx';
import SkillMarquee from './features/career/SkillMarquee.jsx';
import Education from './features/career/Education.jsx';
import { person, personal, research } from './data/career.js';
import styles from './App.module.css';

export default function App() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Strengths />
        <Experience />
        <CardList id="personal" eyebrow="SIDE PROJECTS" title="개인 프로젝트" items={personal} />
        <CardList id="research" eyebrow="RESEARCH" title="연구" items={research} />
        <SkillMarquee />
        <Education />
      </main>
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <p className={styles.big}>
            <span className="grad-text">Contact</span>
          </p>
          <div className={styles.links}>
            <a href={`mailto:${person.email}`}>{person.email}</a>
            <a href={person.github} target="_blank" rel="noreferrer">
              github.com/wookidoki
            </a>
          </div>
          <p className={styles.note}>고객사명은 계약상 비공개로 일반 표기했습니다 · 2026.11</p>
        </div>
      </footer>
    </>
  );
}
