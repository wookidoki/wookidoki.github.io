import { useState } from 'react';
import { useLang } from '../../context/LanguageContext';
import { qnaSection, qnaItems } from '../../data/qna';
import styles from './QnA.module.css';

export default function QnA() {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState(null);
  const heading = qnaSection[lang];

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="qna" className={styles.qna}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{heading.title}</h2>
        <p className={styles.subtitle}>{heading.subtitle}</p>
        <div className={styles.list}>
          {qnaItems.map((item, i) => {
            const t = item[lang];
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <button className={styles.question} onClick={() => toggle(i)}>
                  <span className={styles.qLabel}>Q{i + 1}</span>
                  <span className={styles.qText}>{t.question}</span>
                  <svg
                    className={styles.arrow}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className={styles.answerWrap}>
                  <div className={styles.answer}>{t.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
