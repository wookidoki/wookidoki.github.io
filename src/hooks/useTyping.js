import { useEffect, useState } from 'react';

const TYPE_MS = 70;
const ERASE_MS = 35;
const HOLD_MS = 1600;

// 단어 목록을 차례로 타이핑했다 지우는 문구.
export function useTyping(words) {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    setI(0);
    setText('');
    setErasing(false);
  }, [words]);

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const word = words[i % words.length];
    if (reduce) {
      setText(word);
      return undefined;
    }
    let t;
    if (!erasing && text === word) t = setTimeout(() => setErasing(true), HOLD_MS);
    else if (erasing && text === '') {
      setErasing(false);
      setI((v) => v + 1);
    } else {
      t = setTimeout(
        () => setText(erasing ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        erasing ? ERASE_MS : TYPE_MS,
      );
    }
    return () => clearTimeout(t);
  }, [text, erasing, i, words]);

  return text;
}
