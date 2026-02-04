import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import QnA from './components/QnA/QnA';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import useScrollSpy from './hooks/useScrollSpy';

function MainPage() {
  const activeSection = useScrollSpy();

  return (
    <>
      <Nav activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <QnA />
        <Contact />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
}
