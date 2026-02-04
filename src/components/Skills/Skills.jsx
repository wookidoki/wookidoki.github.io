import { useState, useEffect } from 'react';
import { useLang } from '../../context/LanguageContext';
import { skills, sectionTitles, githubUsername } from '../../data/portfolio';
import styles from './Skills.module.css';

export default function Skills() {
  const { lang } = useLang();
  const heading = sectionTitles[lang].skills;
  const [ghData, setGhData] = useState(null);

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [reposRes, commitsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`),
          fetch(`https://api.github.com/search/commits?q=author:${githubUsername}`, {
            headers: { Accept: 'application/vnd.github.cloak-preview+json' },
          }),
        ]);
        const repos = await reposRes.json();
        const commitsData = await commitsRes.json();

        // 언어 통계
        const langBytes = {};
        if (Array.isArray(repos)) {
          repos.forEach((r) => {
            if (r.language && !r.fork) {
              langBytes[r.language] = (langBytes[r.language] || 0) + (r.size || 0);
            }
          });
        }
        const totalBytes = Object.values(langBytes).reduce((a, b) => a + b, 0) || 1;
        const langStats = Object.entries(langBytes)
          .map(([name, bytes]) => ({ name, percent: Math.round((bytes / totalBytes) * 100) }))
          .sort((a, b) => b.percent - a.percent)
          .slice(0, 8);

        // 레포 통계
        const totalRepos = Array.isArray(repos) ? repos.filter((r) => !r.fork).length : 0;
        const totalStars = Array.isArray(repos) ? repos.reduce((s, r) => s + (r.stargazers_count || 0), 0) : 0;

        // 총 커밋 수 (Search API)
        const totalCommits = commitsData?.total_count || 0;

        setGhData({ langStats, totalRepos, totalStars, totalCommits });
      } catch {
        setGhData(null);
      }
    }
    fetchGitHub();
  }, []);

  const LANG_COLORS = {
    JavaScript: '#f1e05a', Python: '#3572A5', Java: '#b07219', 'Jupyter Notebook': '#DA5B0B',
    TypeScript: '#3178c6', HTML: '#e34c26', CSS: '#563d7c', Shell: '#89e051',
  };

  return (
    <section id="skills">
      <div className={styles.inner}>
        <h2 className={styles.heading}>{heading}</h2>

        {/* GitHub 활동 요약 */}
        {ghData && (
          <div className={styles.ghSection}>
            <div className={styles.ghStats}>
              <div className={styles.ghStat}>
                <span className={styles.ghNum}>{ghData.totalRepos}</span>
                <span className={styles.ghLabel}>Repositories</span>
              </div>
              <div className={styles.ghStat}>
                <span className={styles.ghNum}>{ghData.totalStars}</span>
                <span className={styles.ghLabel}>Stars</span>
              </div>
              {ghData.totalCommits > 0 && (
                <div className={styles.ghStat}>
                  <span className={styles.ghNum}>{ghData.totalCommits.toLocaleString()}</span>
                  <span className={styles.ghLabel}>{lang === 'ko' ? '총 커밋' : 'Total Commits'}</span>
                </div>
              )}
            </div>

            {/* 잔디 이미지 */}
            <div className={styles.ghGraph}>
              <img
                src={`https://ghchart.rshah.org/2563eb/${githubUsername}`}
                alt="GitHub contribution graph"
                className={styles.ghChartImg}
              />
            </div>

            {/* 언어 비율 바 */}
            <div className={styles.langSection}>
              <h3 className={styles.langTitle}>{lang === 'ko' ? '사용 언어 비율 (레포지토리 기준)' : 'Language Distribution (by repository)'}</h3>
              <div className={styles.langBar}>
                {ghData.langStats.map((l) => (
                  <div
                    key={l.name}
                    className={styles.langSegment}
                    style={{ width: `${l.percent}%`, background: LANG_COLORS[l.name] || '#888' }}
                    title={`${l.name} ${l.percent}%`}
                  />
                ))}
              </div>
              <div className={styles.langLabels}>
                {ghData.langStats.map((l) => (
                  <span key={l.name} className={styles.langLabel}>
                    <span className={styles.langDot} style={{ background: LANG_COLORS[l.name] || '#888' }} />
                    {l.name} {l.percent}%
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 기술 태그 카드 */}
        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.card}>
              <h3 className={styles.category}>{group.category}</h3>
              <div className={styles.tags}>
                {group.items.map((name) => (
                  <span key={name} className={styles.tag}>{name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
