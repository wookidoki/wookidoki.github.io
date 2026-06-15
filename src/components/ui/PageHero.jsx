import styles from './PageHero.module.css';

export default function PageHero({ eyebrow, title, description }) {
  return (
    <header className={styles.hero}>
      <div className={styles.inner}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.desc}>{description}</p>}
      </div>
    </header>
  );
}
