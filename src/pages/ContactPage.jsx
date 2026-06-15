import PageHero from '../components/ui/PageHero';
import Contact from '../components/Contact/Contact';
import { useLang } from '../context/LanguageContext';

export default function ContactPage() {
  const { lang } = useLang();
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title={lang === 'ko' ? '연락처' : 'Contact'}
        description={
          lang === 'ko'
            ? '협업이나 궁금한 점이 있으면 편하게 연락해 주세요.'
            : 'Feel free to reach out for collaboration or questions.'
        }
      />
      <Contact />
    </>
  );
}
