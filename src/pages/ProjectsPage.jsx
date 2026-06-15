import PageHero from '../components/ui/PageHero';
import Projects from '../components/Projects/Projects';
import { useLang } from '../context/LanguageContext';

export default function ProjectsPage() {
  const { lang } = useLang();
  return (
    <>
      <PageHero
        eyebrow="WORK"
        title={lang === 'ko' ? '프로젝트' : 'Projects'}
        description={
          lang === 'ko'
            ? '실무와 개인 프로젝트. 웹 서비스부터 데이터 분석까지.'
            : 'Professional and personal work — from web services to data analysis.'
        }
      />
      <Projects />
    </>
  );
}
