import Reveal from './Reveal.jsx';
import styles from './Section.module.css';

export default function Section({ id, index, title, children }) {
  return (
    <section id={id} className={styles.section}>
      <Reveal className={styles.head}>
        <span className={styles.index}>{String(index).padStart(2, '0')}</span>
        <h2 className={styles.title}>{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
