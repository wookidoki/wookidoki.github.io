import PageHero from '../components/ui/PageHero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import QnA from '../components/QnA/QnA';
import { useLang } from '../context/LanguageContext';

export default function AboutPage() {
  const { lang } = useLang();
  return (
    <>
      <PageHero
        eyebrow="ABOUT"
        title={lang === 'ko' ? '소개' : 'About'}
        description={
          lang === 'ko'
            ? '비즈니스와 기술, 두 언어를 잇는 IT 컨설턴트입니다.'
            : 'An IT consultant bridging the languages of business and technology.'
        }
      />
      <About />
      <Skills />
      <QnA />
    </>
  );
}
