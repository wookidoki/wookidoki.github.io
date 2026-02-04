import { useState, useEffect } from 'react';

const sectionIds = ['hero', 'about', 'skills', 'projects', 'qna', 'contact'];

export default function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            const aIdx = sectionIds.indexOf(a.target.id);
            const bIdx = sectionIds.indexOf(b.target.id);
            return aIdx - bIdx;
          });

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
