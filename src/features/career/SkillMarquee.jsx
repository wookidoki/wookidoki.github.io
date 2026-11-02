import { skills } from '../../data/career.js';
import styles from './SkillMarquee.module.css';

// 기술 스택이 한 줄로 천천히 흐르는 띠. 인쇄 때는 목록으로 보인다.
export default function SkillMarquee() {
  return (
    <section className={styles.wrap} aria-label="기술 스택">
      <div className={styles.row}>
        <div className={styles.track}>
          {[...skills, ...skills].map((s, j) => (
            <span key={`${s}-${j}`} className={styles.item} aria-hidden={j >= skills.length}>
              {s}
            </span>
          ))}
        </div>
      </div>
      <p className={styles.printList}>{skills.join(' · ')}</p>
    </section>
  );
}
