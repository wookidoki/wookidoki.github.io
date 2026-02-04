import { useLang } from '../../context/LanguageContext';
import { skills, sectionTitles } from '../../data/portfolio';
import styles from './Skills.module.css';

export default function Skills() {
  const { lang } = useLang();
  const heading = sectionTitles[lang].skills;

  return (
    <section id="skills">
      <div className={styles.inner}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.card}>
              <h3 className={styles.category}>{group.category}</h3>
              <ul className={styles.list}>
                {group.items.map((skill) => (
                  <li key={skill.name} className={styles.item}>
                    <div className={styles.itemHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.barBg}>
                      <div
                        className={styles.barFill}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
