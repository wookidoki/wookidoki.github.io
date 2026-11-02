import { skills } from '../../data/career.js';
import styles from './SkillMarquee.module.css';

// 기술 스택이 두 줄로 반대 방향으로 흐르는 띠. 인쇄 때는 목록으로 보인다.
export default function SkillMarquee() {
  const half = Math.ceil(skills.length / 2);
  const rows = [skills.slice(0, half), skills.slice(half)];
  return (
    <section className={styles.wrap} aria-label="기술 스택">
      {rows.map((row, i) => (
        <div key={i} className={`${styles.row} ${i ? styles.rev : ''}`}>
          <div className={styles.track}>
            {[...row, ...row].map((s, j) => (
              <span key={`${s}-${j}`} className={styles.item} aria-hidden={j >= row.length}>
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
      <p className={styles.printList}>{skills.join(' · ')}</p>
    </section>
  );
}
