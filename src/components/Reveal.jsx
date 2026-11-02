import { useInView } from '../hooks/useInView.js';
import styles from './Reveal.module.css';

// 스크롤로 화면에 들어올 때 아래에서 살짝 올라오며 나타난다. delay는 ms.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${styles.reveal} ${inView ? styles.in : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
