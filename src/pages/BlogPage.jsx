import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import { useLang } from '../context/LanguageContext';
import styles from './BlogPage.module.css';

export default function BlogPage() {
  const { lang } = useLang();
  return (
    <>
      <PageHero
        eyebrow="WRITING"
        title={lang === 'ko' ? '블로그' : 'Blog'}
        description={
          lang === 'ko'
            ? '컨설팅, Oracle Unifier, 개발에 대한 기록.'
            : 'Notes on consulting, Oracle Unifier, and development.'
        }
      />
      <section className={styles.section}>
        <Container narrow>
          <p className={styles.empty}>
            {lang === 'ko' ? '곧 첫 글이 올라옵니다.' : 'First posts coming soon.'}
          </p>
        </Container>
      </section>
    </>
  );
}
