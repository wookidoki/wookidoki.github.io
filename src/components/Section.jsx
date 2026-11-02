import Reveal from './Reveal.jsx';
import styles from './Section.module.css';

export default function Section({ id, eyebrow, title, lead, children }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.head}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 className={styles.title}>{title}</h2>
          {lead && <p className={styles.lead}>{lead}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
