import Reveal from './Reveal.jsx';
import ScrambleText from './ScrambleText.jsx';
import { useInView } from '../hooks/useInView.js';
import styles from './Section.module.css';

export default function Section({ id, eyebrow, title, lead, children }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.head}>
          <p ref={ref} className={styles.eyebrow}>
            <span className={styles.bar} aria-hidden />
            <ScrambleText text={eyebrow} start={inView} />
          </p>
          <h2 className={styles.title}>{title}</h2>
          {lead && <p className={styles.lead}>{lead}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
