import TopBar from './features/settings/TopBar.jsx';
import SideNav from './components/SideNav.jsx';
import Hero from './features/career/Hero.jsx';
import Metrics from './features/career/Metrics.jsx';
import Careers from './features/career/Careers.jsx';
import ProjectList from './features/career/ProjectList.jsx';
import Skills from './features/career/Skills.jsx';
import Education from './features/career/Education.jsx';
import styles from './App.module.css';

export const SECTIONS = [
  { id: 'summary', label: '요약' },
  { id: 'career', label: '경력' },
  { id: 'projects', label: '프로젝트' },
  { id: 'skills', label: '기술' },
  { id: 'education', label: '학력 · 수상' },
];

export default function App() {
  return (
    <>
      <TopBar />
      <div className={styles.shell}>
        <SideNav sections={SECTIONS} />
        <main className={styles.main}>
          <Hero />
          <Metrics />
          <Careers />
          <ProjectList />
          <Skills />
          <Education />
          <footer className={styles.footer}>
            <span>최종 수정 2026.11</span>
            <span>고객사명은 계약상 비공개로 마스킹했습니다.</span>
          </footer>
        </main>
      </div>
    </>
  );
}
