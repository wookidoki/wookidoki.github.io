export const profile = {
  ko: {
    name: '이승욱',
    greeting: '안녕하세요,',
    nameSuffix: '입니다.',
    title: '풀스택 웹 개발자 & 데이터 사이언티스트',
    about: `웹 개발과 데이터 분석, 두 가지 역량으로 비즈니스를 설계하는 개발자입니다.
경영정보학 전공과 금융투자 동아리 RICH 6년 활동(교육부장·매크로팀장·해외주식팀장)을 통해 회계, 재무, 마케팅 등 다양한 도메인 지식을 갖추었습니다.
KH정보교육원에서 AWS 기반 풀스택 웹 개발 과정을 수료하며, React·Spring Boot 서비스 개발부터 BERT·LDA 기반 NLP 연구까지 폭넓은 기술 역량을 보유하고 있습니다.`,
  },
  en: {
    name: 'Seungwook Lee',
    greeting: "Hi, I'm",
    nameSuffix: '.',
    title: 'Full-Stack Web Developer & Data Scientist',
    about: `A developer who designs business solutions with both web development and data analysis.
Through my MIS major and 6 years in the finance investment club RICH (Education Director, Macro Team Lead, Int'l Stocks Team Lead), I bring diverse domain knowledge in accounting, finance, and marketing.
With full-stack training at KH Institute, I have strong capabilities from React & Spring Boot services to NLP research with BERT and LDA.`,
  },
  keywords: ['React', 'Spring Boot', 'Data Science', 'NLP', 'Python'],
};

export const education = [
  {
    ko: { school: '동국대학교 (서울)', major: '경영정보학과', period: '2017.03 ~ 2025.12 (졸업예정)' },
    en: { school: 'Dongguk University, Seoul', major: 'Management Information Systems', period: '2017.03 ~ 2025.12 (Expected)' },
    gpa: '3.46 / 4.5',
  },
  {
    ko: { school: '선주고등학교', major: '인문계열', period: '2014.03 ~ 2017.03 (졸업)' },
    en: { school: 'Seonju High School', major: 'Humanities', period: '2014.03 ~ 2017.03' },
  },
];

export const career = [
  {
    ko: {
      company: '탑프로홀딩스',
      role: '사원 (정규직)',
      period: '2024.04 ~ 2025.07 (1년 4개월)',
      description: '서비스 기획, 영업 및 운영 전반 업무 수행. 고객 커뮤니케이션 및 사내 업무 효율화 기여.',
    },
    en: {
      company: 'TopPro Holdings',
      role: 'Staff (Full-time)',
      period: '2024.04 ~ 2025.07 (1y 4m)',
      description: 'Service planning, sales and operations. Contributed to customer communication and internal workflow optimization.',
    },
  },
];

export const certifications = [
  {
    ko: { name: 'KH정보교육원', detail: '프로젝트 기반 AWS 풀스택 웹 개발자 양성과정', period: '2025.07 ~ 2026.02 (수료 예정, 100% 출석)' },
    en: { name: 'KH Information Education Institute', detail: 'Project-based AWS Full-Stack Web Developer Course', period: '2025.07 ~ 2026.02 (Expected, 100% Attendance)' },
    type: 'training',
  },
  {
    ko: { name: '데이터분석준전문가 (ADsP)', detail: '한국데이터베이스진흥원', period: '2025.07' },
    en: { name: 'ADsP (Advanced Data Analytics Semi-Professional)', detail: 'Korea Database Agency', period: '2025.07' },
    type: 'certificate',
  },
  {
    ko: { name: '경기기후 플랫폼 서비스 개발 경진대회', detail: '최우수상 | 경기도 기후환경정책과', period: '2025.12' },
    en: { name: 'Gyeonggi Climate Platform Development Competition', detail: 'Grand Prize | Gyeonggi-do Climate & Environment Policy Div.', period: '2025.12' },
    type: 'award',
  },
];

export const nav = {
  ko: { links: [{ id: 'hero', label: '홈' }, { id: 'about', label: '소개' }, { id: 'skills', label: '기술' }, { id: 'projects', label: '프로젝트' }, { id: 'qna', label: '자기소개서' }, { id: 'contact', label: '연락처' }] },
  en: { links: [{ id: 'hero', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' }, { id: 'projects', label: 'Projects' }, { id: 'qna', label: 'About Me' }, { id: 'contact', label: 'Contact' }] },
};

export const sectionTitles = {
  ko: { about: '소개', skills: '기술 스택', projects: '프로젝트', contact: '연락처' },
  en: { about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
};

export const skills = [
  { category: 'Frontend', items: [{ name: 'React', level: 90 }, { name: 'Vite', level: 85 }, { name: 'Styled Components', level: 80 }, { name: 'Tailwind CSS', level: 75 }, { name: 'Zustand', level: 80 }, { name: 'Google Maps API', level: 70 }] },
  { category: 'Backend', items: [{ name: 'Spring Boot', level: 85 }, { name: 'Node.js / Express', level: 80 }, { name: 'JPA', level: 80 }, { name: 'MyBatis', level: 75 }, { name: 'JWT', level: 80 }, { name: 'Spring Security', level: 75 }] },
  { category: 'Database', items: [{ name: 'PostgreSQL', level: 80 }, { name: 'Oracle', level: 75 }] },
  { category: 'Data Science', items: [{ name: 'Python', level: 90 }, { name: 'PyTorch', level: 80 }, { name: 'TensorFlow', level: 75 }, { name: 'BERT / SBERT', level: 80 }, { name: 'scikit-learn', level: 85 }, { name: 'Pandas', level: 90 }] },
  { category: 'NLP', items: [{ name: 'KoNLPy', level: 80 }, { name: 'Gensim (LDA)', level: 75 }, { name: 'TF-IDF', level: 85 }, { name: 'NLTK', level: 75 }, { name: 'spaCy', level: 70 }] },
  { category: 'Infra / Tools', items: [{ name: 'Docker', level: 80 }, { name: 'AWS (EC2, S3)', level: 75 }, { name: 'Nginx', level: 70 }, { name: 'Git', level: 90 }, { name: 'GitHub Actions', level: 75 }] },
];

export const projects = [
  {
    id: 1,
    title: 'Within Eco',
    ko: {
      subtitle: '경기도 환경 탐험 플랫폼',
      description: '경기도의 환경 명소를 탐험하고 공유할 수 있는 웹 플랫폼입니다. Google Maps API를 활용한 인터랙티브 지도와 사용자 리뷰 시스템을 구현했습니다. 경기기후 플랫폼 경진대회 최우수상 수상작.',
      detail: {
        overview: '경기도 기후환경 데이터를 활용하여 시민들이 주변 환경 명소를 직관적으로 탐색하고, 방문 후기를 공유할 수 있는 공공 서비스 웹 플랫폼입니다. 1인 풀스택 개발로 기획부터 배포까지 전 과정을 수행했습니다.',
        background: '경기도 기후환경정책과의 공모전에 참가하여, 기후 데이터를 시민 친화적으로 전달하는 서비스를 기획했습니다. 초기에는 Three.js 기반 3D 시각화를 시도했으나, 모바일 환경 성능 저하와 일정 리스크를 고려해 2D 차트 + Google Maps 기반으로 전환하는 결단을 내렸고, 이 선택이 직관적인 UX로 이어져 최우수상을 수상하게 되었습니다.',
        role: '1인 풀스택 개발 (기획 / 프론트엔드 / 백엔드 / 배포)',
        highlights: [
          'Google Maps API 기반 인터랙티브 지도와 마커 클러스터링 구현',
          'RESTful API 설계 및 PostgreSQL 데이터 모델링',
          'Docker 컨테이너화를 통한 AWS EC2 배포 자동화',
          '서비스 경량화를 위해 3D → 2D 시각화 전환 결정 (성능 최적화)',
          '경기기후 플랫폼 경진대회 최우수상 수상',
        ],
      },
    },
    en: {
      subtitle: 'Gyeonggi-do Environmental Exploration Platform',
      description: 'A web platform to explore and share environmental attractions in Gyeonggi-do. Built with interactive Google Maps and a user review system. Grand Prize winner at the Gyeonggi Climate Platform Competition.',
      detail: {
        overview: 'A public service web platform that allows citizens to intuitively explore nearby environmental spots and share visit reviews using Gyeonggi-do climate data. Solo full-stack development from planning to deployment.',
        background: 'Developed for the Gyeonggi-do Climate & Environment Policy Division competition. Initially attempted Three.js 3D visualization, but pivoted to 2D charts + Google Maps for better mobile performance and UX, which contributed to winning the Grand Prize.',
        role: 'Solo Full-Stack Developer (Planning / Frontend / Backend / Deployment)',
        highlights: [
          'Interactive map with Google Maps API and marker clustering',
          'RESTful API design with PostgreSQL data modeling',
          'Dockerized deployment automation on AWS EC2',
          'Strategic pivot from 3D to 2D visualization for performance',
          'Grand Prize at Gyeonggi Climate Platform Competition',
        ],
      },
    },
    category: 'Web',
    techs: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Google Maps'],
    github: 'https://github.com/wookidoki',
    liveUrl: 'http://44.251.87.125',
    period: '2025.10 ~ 2025.12',
  },
  {
    id: 2,
    title: 'EarthWith',
    ko: {
      subtitle: '환경 보호 커뮤니티',
      description: '환경 보호 활동을 공유하고 소통하는 커뮤니티 플랫폼입니다. Spring Boot 기반 REST API와 AWS S3 파일 업로드를 구현했습니다.',
      detail: {
        overview: '환경 보호 활동을 기록하고 다른 사용자들과 소통할 수 있는 커뮤니티 웹 서비스입니다. 게시판, 댓글, 파일 업로드 등 커뮤니티 필수 기능을 Spring Boot 기반으로 구현했습니다.',
        background: 'KH정보교육원 세미 프로젝트로 진행한 팀 프로젝트입니다. 백엔드 설계를 맡아 DB 스키마 단계부터 데이터 적재 효율성을 최우선으로 설계했습니다.',
        role: '백엔드 개발 (DB 설계 / REST API / 파일 업로드)',
        highlights: [
          'Spring Boot 기반 RESTful API 설계 및 구현',
          'MyBatis 동적 쿼리를 활용한 N+1 유사 문제 해결 (3회 DB 조회 → 1회 통합)',
          'AWS S3 연동 파일 업로드 및 이미지 관리',
          'Oracle DB 스키마 설계 및 데이터 정규화',
          'Spring Security + JWT 기반 인증/인가 구현',
        ],
      },
    },
    en: {
      subtitle: 'Environmental Community Platform',
      description: 'A community platform for sharing environmental activities. Built with Spring Boot REST API and AWS S3 file uploads.',
      detail: {
        overview: 'A community web service for recording environmental activities and connecting with other users. Implemented essential community features including boards, comments, and file uploads on Spring Boot.',
        background: 'A team project during the KH Information Education Institute program. Led backend development with a focus on data efficiency from the DB schema design phase.',
        role: 'Backend Developer (DB Design / REST API / File Upload)',
        highlights: [
          'RESTful API design and implementation with Spring Boot',
          'Resolved N+1-like query issue using MyBatis dynamic SQL (3 queries → 1)',
          'AWS S3 file upload integration for image management',
          'Oracle DB schema design and data normalization',
          'Authentication/authorization with Spring Security + JWT',
        ],
      },
    },
    category: 'Web',
    techs: ['React', 'Spring Boot', 'Oracle', 'AWS S3', 'MyBatis', 'JWT'],
    github: 'https://github.com/wookidoki',
    liveUrl: 'http://54.245.198.152:8080',
    period: '2025.09 ~ 2025.10',
  },
  {
    id: 3,
    title: 'Music GenZ',
    ko: {
      subtitle: '음악 소셜 플랫폼',
      description: '음악 취향을 공유하고 소통하는 소셜 플랫폼입니다. Zustand 상태 관리와 Framer Motion 애니메이션을 활용했습니다.',
      detail: {
        overview: '사용자들이 자신의 음악 취향을 공유하고, 플레이리스트를 큐레이션하며, 다른 유저와 소통할 수 있는 음악 전문 소셜 네트워크 서비스입니다.',
        background: 'React 기반 프론트엔드 심화 프로젝트로, SPA 환경에서의 복잡한 상태 관리와 인터랙티브 UI/UX 구현에 집중했습니다.',
        role: '프론트엔드 개발 (UI/UX 설계 / 상태 관리 / 애니메이션)',
        highlights: [
          'Zustand 기반 전역 상태 관리로 컴포넌트 간 데이터 흐름 최적화',
          'Framer Motion을 활용한 페이지 전환 및 인터랙션 애니메이션',
          '플레이리스트 CRUD 및 음악 검색 기능 구현',
          '반응형 디자인으로 모바일/데스크톱 모두 지원',
        ],
      },
    },
    en: {
      subtitle: 'Music Social Platform',
      description: 'A social platform for sharing music tastes. Built with Zustand state management and Framer Motion animations.',
      detail: {
        overview: 'A music-focused social network where users share playlists, curate music collections, and connect with others through shared tastes.',
        background: 'A frontend-focused project centered on complex state management and interactive UI/UX in a React SPA environment.',
        role: 'Frontend Developer (UI/UX Design / State Management / Animation)',
        highlights: [
          'Global state management with Zustand for optimized data flow',
          'Page transitions and interaction animations with Framer Motion',
          'Playlist CRUD and music search functionality',
          'Responsive design for mobile and desktop',
        ],
      },
    },
    category: 'Web',
    techs: ['React', 'Zustand', 'Framer Motion'],
    github: 'https://github.com/wookidoki',
    period: '2025.08 ~ 2025.09',
  },
  {
    id: 4,
    title: 'Steam Review Analysis',
    ko: {
      subtitle: 'Steam 리뷰 감성 분석',
      description: '4만 건 이상의 Steam 리뷰를 수집하여 BERT 기반 감성 분석과 패치 전후 키워드 변화를 정량적으로 측정한 프로젝트입니다.',
      detail: {
        overview: 'Steam 게임 리뷰 데이터를 대규모로 수집하고, 자연어 처리 기법을 활용해 유저 감성을 분석한 데이터 사이언스 프로젝트입니다. 게임 업데이트가 유저 감정에 미치는 영향을 정량적으로 측정하는 분석 시스템을 구축했습니다.',
        background: '초기에는 "추천했지만 부정적인 리뷰를 남긴 유저(Concerned)"가 가장 건설적인 피드백을 줄 것이라는 가설을 세우고 4-Cluster 모델을 구축했습니다. 그러나 해당 유저군의 97%가 밈이나 풍자성 리뷰라는 사실을 데이터 검증 과정에서 발견하고, 기존 분석 프레임워크를 전면 폐기했습니다. 이후 "패치 전후 키워드 변화 측정"으로 방향을 전환하여, 버그 수정 패치는 긍정률을 높이지만 대형 콘텐츠 업데이트는 오히려 유저 피로도를 높여 긍정률을 하락시킨다는 역설적 인사이트를 도출했습니다.',
        role: '1인 데이터 분석 (수집 / 전처리 / 모델링 / 시각화)',
        highlights: [
          '4만 건 이상 Steam API 리뷰 데이터 수집 및 전처리',
          'BERT 기반 감성 분류 모델 구축 및 검증',
          '가설 검증 실패 → 분석 방향 전환의 유연한 의사결정',
          '패치 유형별 긍정률 변화 통계 검정 (t-test, chi-square)',
          '데이터 기반 역설적 인사이트 도출: "큰 업데이트 ≠ 높은 만족도"',
        ],
      },
    },
    en: {
      subtitle: 'Steam Review Sentiment Analysis',
      description: 'Collected 40,000+ Steam reviews to perform BERT-based sentiment analysis and quantitatively measure keyword changes before/after game patches.',
      detail: {
        overview: 'A data science project that collected large-scale Steam game review data and analyzed user sentiment using NLP techniques. Built an analysis system to quantitatively measure how game updates affect user emotions.',
        background: 'Initially hypothesized that "Concerned" users (positive recommendation but negative review) would provide the most constructive feedback. However, data validation revealed 97% were memes or satirical reviews. Pivoted to measuring keyword changes before/after patches, discovering that bug-fix patches increase positive rates while major content updates paradoxically decrease them due to user fatigue.',
        role: 'Solo Data Analyst (Collection / Preprocessing / Modeling / Visualization)',
        highlights: [
          '40,000+ review data collection via Steam API',
          'BERT-based sentiment classification model',
          'Flexible decision-making: hypothesis failure → pivot',
          'Statistical testing by patch type (t-test, chi-square)',
          'Paradoxical insight: "Big updates ≠ Higher satisfaction"',
        ],
      },
    },
    category: 'Data Science',
    techs: ['Python', 'BERT', 'SciPy', 'Pandas', 'Steam API'],
    github: 'https://github.com/wookidoki',
    period: '2025.04 ~ 2025.06',
    chartData: {
      positiveRate: {
        labels: ['패치 전', '버그 수정 후', '밸런스 패치 후', '대형 업데이트 후'],
        labelsEn: ['Before Patch', 'After Bug Fix', 'After Balance Patch', 'After Major Update'],
        data: [62, 78, 68, 51],
        label: '긍정률 변화 (%)',
        labelEn: 'Positive Rate Change (%)',
      },
      sentimentDist: {
        labels: ['긍정', '부정', '중립', '풍자/밈'],
        labelsEn: ['Positive', 'Negative', 'Neutral', 'Satirical/Meme'],
        data: [45, 22, 18, 15],
        label: '리뷰 감성 분포 (%)',
        labelEn: 'Sentiment Distribution (%)',
      },
      statTest: {
        labels: { ko: ['버그 수정 (t-test)', '밸런스 패치 (t-test)', '대형 업데이트 (t-test)', 'Concerned 유저 χ² 검정'], en: ['Bug Fix (t-test)', 'Balance Patch (t-test)', 'Major Update (t-test)', 'Concerned User χ² test'] },
        data: [0.003, 0.041, 0.001, 0.0001],
        label: { ko: 'p-value (유의수준 0.05)', en: 'p-value (α = 0.05)' },
      },
    },
  },
  {
    id: 5,
    title: 'AI Ethics Evolution 2017-2024',
    ko: {
      subtitle: 'AI 윤리 연구 동향 분석',
      description: '2017-2024년 AI 윤리 관련 논문 및 보고서를 SBERT 임베딩과 LDA 토픽 모델링으로 분석하여 연구 동향 변화를 추적한 프로젝트입니다.',
      detail: {
        overview: '주요 AI 윤리 보고서와 논문 텍스트를 수집하여, 자연어 처리 기법으로 연도별 핵심 토픽의 변화를 추적한 연구 프로젝트입니다. TF-IDF와 LDA를 활용한 토픽 모델링, SBERT 임베딩 기반 의미 유사도 분석을 수행했습니다.',
        background: '학부 연구 프로젝트로, AI 윤리 분야에서 "환경" 이슈가 어떻게 부상하고 있는지를 데이터로 규명하는 것이 목표였습니다. PDF 형태의 보고서를 파싱하고 전처리한 뒤, 토픽 모델링을 통해 연도별 주요 키워드 변화를 시각화했습니다.',
        role: '1인 연구 (데이터 수집 / NLP 파이프라인 / 시각화 / 보고서 작성)',
        highlights: [
          'PDF 보고서 파싱 및 텍스트 전처리 파이프라인 구축',
          'TF-IDF 기반 핵심 키워드 추출 및 연도별 비중 변화 분석',
          'LDA 토픽 모델링으로 5개 주요 연구 토픽 도출',
          'SBERT 임베딩 + 코사인 유사도를 통한 보고서 간 의미 비교',
          '2020년 이후 "환경 AI 윤리" 토픽 급부상 트렌드 발견',
        ],
      },
    },
    en: {
      subtitle: 'AI Ethics Research Trend Analysis',
      description: 'Tracked AI ethics research trends from 2017-2024 using SBERT embeddings and LDA topic modeling on academic papers and reports.',
      detail: {
        overview: 'A research project that collected major AI ethics reports and papers, tracking yearly topic evolution using NLP techniques including TF-IDF, LDA topic modeling, and SBERT-based semantic similarity analysis.',
        background: 'An undergraduate research project aimed at quantifying how "environmental" issues emerged within AI ethics discourse. Parsed PDF reports, preprocessed text, and visualized yearly keyword changes through topic modeling.',
        role: 'Solo Researcher (Data Collection / NLP Pipeline / Visualization / Report)',
        highlights: [
          'PDF report parsing and text preprocessing pipeline',
          'TF-IDF keyword extraction with yearly trend analysis',
          'LDA topic modeling: 5 major research topics identified',
          'SBERT embeddings + cosine similarity for semantic comparison',
          'Discovered rapid rise of "Environmental AI Ethics" topic post-2020',
        ],
      },
    },
    category: 'Research',
    techs: ['SBERT', 'LDA', 'TF-IDF', 'Python', 'PDF 분석'],
    github: 'https://github.com/wookidoki',
    period: '2024.09 ~ 2024.12',
    chartData: {
      topicTrend: {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [
          { label: { ko: '공정성/편향', en: 'Fairness/Bias' }, data: [35, 38, 32, 28, 25, 22, 20, 18] },
          { label: { ko: '프라이버시', en: 'Privacy' }, data: [30, 28, 27, 22, 20, 18, 16, 14] },
          { label: { ko: '투명성/설명가능', en: 'Transparency' }, data: [20, 18, 22, 24, 25, 26, 25, 24] },
          { label: { ko: '환경/지속가능', en: 'Environment' }, data: [5, 6, 8, 14, 18, 22, 26, 30] },
          { label: { ko: '거버넌스', en: 'Governance' }, data: [10, 10, 11, 12, 12, 12, 13, 14] },
        ],
      },
      topicDist2024: {
        labels: { ko: ['공정성/편향', '프라이버시', '투명성', '환경/지속가능', '거버넌스'], en: ['Fairness/Bias', 'Privacy', 'Transparency', 'Environment', 'Governance'] },
        data: [18, 14, 24, 30, 14],
      },
    },
  },
  {
    id: 6,
    title: 'Image Analysis Deep Learning',
    ko: {
      subtitle: '이미지 분석 딥러닝',
      description: 'PyTorch CNN을 활용한 이미지 분류와 TensorFlow GAN을 활용한 이미지 생성 프로젝트입니다.',
      detail: {
        overview: '딥러닝의 두 가지 핵심 과제인 이미지 분류(CNN)와 이미지 생성(GAN)을 각각 PyTorch와 TensorFlow로 구현하며 프레임워크별 특성을 비교 학습한 프로젝트입니다.',
        background: '딥러닝 실습 프로젝트로, CNN 아키텍처(ResNet, VGG 등)를 활용한 분류 모델과 GAN을 활용한 이미지 생성 모델을 구현했습니다. 두 프레임워크의 차이점을 직접 체험하며 실무적 감각을 키웠습니다.',
        role: '1인 개발 (모델 설계 / 학습 / 평가 / 시각화)',
        highlights: [
          'PyTorch CNN (ResNet 기반) 이미지 분류 모델 구현 및 학습',
          'TensorFlow GAN 기반 이미지 생성 모델 구현',
          '데이터 증강(Augmentation) 기법 적용으로 분류 정확도 향상',
          'PyTorch vs TensorFlow 프레임워크 비교 분석',
        ],
      },
    },
    en: {
      subtitle: 'Deep Learning Image Analysis',
      description: 'Image classification with PyTorch CNN and image generation with TensorFlow GAN.',
      detail: {
        overview: 'Implemented both image classification (CNN) and image generation (GAN) using PyTorch and TensorFlow respectively, comparing framework characteristics.',
        background: 'A deep learning practice project implementing classification with CNN architectures (ResNet, VGG) and generation with GAN, gaining hands-on experience with both frameworks.',
        role: 'Solo Developer (Model Design / Training / Evaluation / Visualization)',
        highlights: [
          'PyTorch CNN (ResNet-based) image classification model',
          'TensorFlow GAN-based image generation model',
          'Data augmentation techniques for improved accuracy',
          'PyTorch vs TensorFlow framework comparison',
        ],
      },
    },
    category: 'Data Science',
    techs: ['PyTorch CNN', 'TensorFlow GAN', 'ResNet', 'Python'],
    github: 'https://github.com/wookidoki',
    period: '2025.03 ~ 2025.05',
    chartData: {
      accuracy: {
        labels: ['Baseline CNN', 'VGG16', 'ResNet50', 'ResNet50 + Augmentation'],
        labelsEn: ['Baseline CNN', 'VGG16', 'ResNet50', 'ResNet50 + Augmentation'],
        data: [72, 84, 91, 95],
        label: '분류 정확도 (%)',
        labelEn: 'Classification Accuracy (%)',
      },
    },
  },
  {
    id: 7,
    title: '환경윤리 설문조사 분석',
    ko: {
      subtitle: 'TPB 모델 기반 설문 분석',
      description: '계획된 행동 이론(TPB) 모델을 적용하여 환경윤리 의식과 친환경 행동 의도 간의 관계를 회귀분석으로 규명한 연구입니다.',
      detail: {
        overview: '환경윤리 의식이 실제 친환경 행동 의도에 미치는 영향을 계획된 행동 이론(Theory of Planned Behavior) 프레임워크로 분석한 연구입니다. 설문 데이터를 수집하고 다중 회귀분석을 수행하여 TPB 모델의 세 가지 독립변수(태도, 주관적 규범, 지각된 행동 통제)가 행동 의도에 미치는 영향을 정량적으로 검증했습니다.',
        background: 'Ajzen(1991)의 TPB 이론을 환경윤리 맥락에 적용한 학부 연구입니다. 설문 설계 시 Likert 5점 척도를 사용하고, Cronbach α로 내적 신뢰도를 검증한 뒤 다중 회귀분석을 수행했습니다. 모델의 설명력(R²)과 각 변인의 표준화 회귀계수(β)를 통해 어떤 요인이 친환경 행동 의도에 가장 큰 영향을 미치는지를 규명했습니다.',
        role: '1인 연구 (설문 설계 / 통계 분석 / 시각화 / 논문 작성)',
        highlights: [
          'TPB 프레임워크 기반 연구 모형 설계 및 가설 수립',
          '설문 도구 내적 신뢰도 검증 (Cronbach α > 0.8)',
          '다중 회귀분석: R² = 0.58, F-test p < 0.001 (모델 유의)',
          '태도(β=0.42, p<0.001)가 행동 의도에 가장 큰 영향 확인',
          'Chart.js 기반 TPB 경로 계수 및 통계 결과 시각화',
        ],
      },
    },
    en: {
      subtitle: 'TPB-based Survey Analysis',
      description: 'Examined the relationship between environmental ethics awareness and pro-environmental behavioral intention using the TPB model with multiple regression analysis.',
      detail: {
        overview: 'A research project analyzing how environmental ethics awareness affects pro-environmental behavioral intention using the Theory of Planned Behavior framework. Quantitatively verified how TPB\'s three independent variables (attitude, subjective norm, perceived behavioral control) influence behavioral intention.',
        background: 'Applied Ajzen\'s (1991) TPB theory to an environmental ethics context. Used Likert 5-point scale for survey design, verified internal reliability with Cronbach\'s α, then performed multiple regression analysis. Examined explanatory power (R²) and standardized coefficients (β) to identify the most influential factors.',
        role: 'Solo Researcher (Survey Design / Statistical Analysis / Visualization / Paper)',
        highlights: [
          'TPB framework-based research model and hypothesis design',
          'Survey instrument reliability verification (Cronbach α > 0.8)',
          'Multiple regression: R² = 0.58, F-test p < 0.001 (significant model)',
          'Attitude (β=0.42, p<0.001) identified as strongest predictor',
          'TPB path coefficient and statistical result visualization with Chart.js',
        ],
      },
    },
    category: 'Research',
    techs: ['TPB 모델', '회귀분석', 'Chart.js', 'SPSS', 'Python'],
    github: 'https://github.com/wookidoki',
    period: '2024.03 ~ 2024.06',
    chartData: {
      regression: {
        labels: { ko: ['태도 (Attitude)', '주관적 규범', '행동 통제력', '환경 지식'], en: ['Attitude', 'Subjective Norm', 'Behavioral Control', 'Env. Knowledge'] },
        data: [0.42, 0.28, 0.35, 0.18],
        pValues: [0.001, 0.008, 0.002, 0.042],
        label: { ko: '표준화 회귀계수 (β)', en: 'Standardized Coefficient (β)' },
      },
      modelFit: {
        labels: { ko: ['R² (설명력)', 'Adjusted R²', 'F-statistic'], en: ['R² (Explained Var.)', 'Adjusted R²', 'F-statistic'] },
        data: [0.58, 0.55, 18.7],
        label: { ko: '모델 적합도', en: 'Model Fit' },
      },
    },
  },
  {
    id: 8,
    title: '교육과정-SDGs 텍스트 연계성 분석',
    ko: {
      subtitle: '교과서와 UN SDGs 간 NLP 기반 연계성 분석',
      description: '개정 교육과정 교과서 텍스트와 UN 지속가능발전목표(SDGs) 간의 의미적 연계성을 NLP 기법으로 정량 분석한 연구입니다. 불용어에 의한 통계적 착시를 발견·보고하고, SBERT로 재분석하여 신뢰도를 높인 핵심 프로젝트입니다.',
      detail: {
        overview: '개정 교육과정 교과서 본문과 UN SDGs 17개 목표 텍스트 간의 의미적 연계성을 자연어 처리 기법으로 정량적으로 분석한 연구입니다. 단순 빈도 분석(TF)의 한계를 극복하고 SBERT 임베딩 기반 의미 유사도 분석으로 고도화했습니다.',
        background: '교수님의 의뢰로 시작된 프로젝트입니다. 초기 TF 기반 분석에서 유사도가 92%로 나와 가설을 완벽히 뒷받침했으나, 데이터를 역추적 검증하는 과정에서 "학습", "탐구", "활동" 등 의미 없는 일반 명사(불용어)가 양쪽 텍스트에 중복 등장하며 발생한 통계적 착시임을 발견했습니다. 즉시 이 사실을 보고하고, 교육 도메인 특화 불용어 사전(150+ 단어)을 직접 구축했습니다. 이후 SBERT 임베딩 + 코사인 유사도로 문맥 수준의 의미 비교를 수행하여 신뢰할 수 있는 63% 유사도를 도출했고, 구체적인 SDG별 연결 고리가 오히려 명확해지는 결과를 얻었습니다.',
        role: '1인 연구 (텍스트 수집 / NLP 분석 / 불용어 사전 구축 / 시각화 / 보고서 작성)',
        highlights: [
          '교과서 전문 텍스트 파싱 및 KoNLPy(Okt) 형태소 분석',
          'TF 분석 → 92% 유사도의 불용어 착시 발견 및 보고',
          '교육 도메인 특화 불용어 사전 150+ 단어 직접 구축',
          'SBERT 임베딩 + 코사인 유사도로 고도화 (92% → 63%, 신뢰도 대폭 향상)',
          'SDG별 연계 강도 히트맵 시각화로 구체적 연결 고리 규명',
          '교수님 평가: "듣고 싶은 답이 아니라 믿을 수 있는 답을 가져왔다"',
        ],
      },
    },
    en: {
      subtitle: 'Curriculum-SDGs NLP Alignment Analysis',
      description: 'Quantitatively analyzed semantic alignment between revised curriculum textbooks and UN SDGs using NLP. Discovered statistical artifacts from stopwords, reported them, and re-analyzed with SBERT for improved reliability.',
      detail: {
        overview: 'Quantitatively analyzed semantic alignment between revised curriculum textbook content and all 17 UN SDGs using NLP techniques. Overcame TF-based analysis limitations by upgrading to SBERT embedding-based semantic similarity.',
        background: 'Commissioned by a professor. Initial TF analysis showed 92% similarity, perfectly supporting the hypothesis. However, during data back-tracking, discovered this was a statistical illusion caused by generic nouns ("learning," "exploration," "activity") appearing in both texts. Immediately reported this, built a domain-specific stopword dictionary (150+ words), and re-analyzed with SBERT embeddings + cosine similarity to produce reliable 63% similarity with clearer SDG-specific connections.',
        role: 'Solo Researcher (Text Collection / NLP Analysis / Stopword Dictionary / Visualization / Report)',
        highlights: [
          'Textbook full-text parsing with KoNLPy (Okt) morphological analysis',
          'Discovered stopword artifact in TF analysis (92% false similarity)',
          'Built domain-specific stopword dictionary with 150+ education terms',
          'SBERT + cosine similarity upgrade (92% → 63%, major reliability gain)',
          'SDG-wise alignment heatmap for identifying specific connections',
          'Professor: "Brought trustworthy answers, not desired ones"',
        ],
      },
    },
    category: 'Research',
    techs: ['SBERT', 'KoNLPy', 'TF-IDF', '코사인 유사도', 'Python'],
    github: 'https://github.com/wookidoki',
    period: '2024.03 ~ 2024.08',
    chartData: {
      similarity: {
        labels: { ko: ['TF 기반 (불용어 포함)', 'TF 기반 (불용어 제거)', 'SBERT 재분석'], en: ['TF-based (with stopwords)', 'TF-based (stopwords removed)', 'SBERT Re-analysis'] },
        data: [92, 71, 63],
        label: { ko: '텍스트 유사도 (%)', en: 'Text Similarity (%)' },
      },
      sdgHeatmap: {
        labels: { ko: ['SDG 4 교육', 'SDG 13 기후', 'SDG 15 육상', 'SDG 12 소비', 'SDG 11 도시', 'SDG 6 물', 'SDG 7 에너지'], en: ['SDG 4 Education', 'SDG 13 Climate', 'SDG 15 Life on Land', 'SDG 12 Consumption', 'SDG 11 Cities', 'SDG 6 Water', 'SDG 7 Energy'] },
        data: [0.82, 0.71, 0.65, 0.58, 0.52, 0.47, 0.41],
        label: { ko: 'SDG별 코사인 유사도', en: 'Cosine Similarity by SDG' },
      },
    },
  },
  {
    id: 9,
    title: '전력 소비량 예측 모델',
    ko: {
      subtitle: 'LightGBM 기반 건물 전력 소비 예측',
      description: '건물 메타데이터와 기상 데이터를 결합하여 LightGBM 기반 전력 소비량 예측 모델을 개발한 프로젝트입니다. 피처 엔지니어링을 통해 예측 성능을 최적화했습니다.',
      detail: {
        overview: '건물 유형, 면적, 층수 등의 메타데이터와 기온, 습도, 풍속 등 기상 데이터를 결합하여, 건물별 시간대 전력 소비량을 예측하는 머신러닝 모델을 개발한 프로젝트입니다.',
        background: '에너지 효율화를 위해 건물별 전력 소비 패턴을 정확히 예측하는 것이 목표였습니다. EDA를 통해 시간대별·요일별 소비 패턴, 기온과 소비량의 비선형 관계 등을 파악하고, 이를 피처로 변환하여 LightGBM 모델의 입력으로 활용했습니다. K-Fold Cross Validation으로 과적합을 방지하고 SMAPE 지표로 성능을 평가했습니다.',
        role: '피처 엔지니어링 및 모델링 담당',
        highlights: [
          '건물 메타 + 기상 데이터 결합 피처 엔지니어링 (시간대, 요일, CDH/HDH 등)',
          'LightGBM 모델 학습 및 하이퍼파라미터 튜닝 (Optuna)',
          'K-Fold Cross Validation으로 일반화 성능 확보',
          'SMAPE 기준 최종 성능: 상위 15% 달성',
          '기온-소비량 비선형 관계 분석 (CDH/HDH 변환)',
        ],
      },
    },
    en: {
      subtitle: 'LightGBM-based Building Power Consumption Prediction',
      description: 'Developed a power consumption prediction model combining building metadata and weather data with LightGBM. Optimized performance through feature engineering.',
      detail: {
        overview: 'A machine learning project that predicts hourly building power consumption by combining building metadata (type, area, floors) with weather data (temperature, humidity, wind speed).',
        background: 'Aimed at accurate building-level power consumption prediction for energy efficiency. Identified hourly/daily consumption patterns and non-linear temperature relationships through EDA, transformed them into features for LightGBM. Used K-Fold Cross Validation to prevent overfitting and SMAPE for evaluation.',
        role: 'Feature Engineering & Modeling Lead',
        highlights: [
          'Feature engineering combining building meta + weather data (hour, day, CDH/HDH)',
          'LightGBM training with hyperparameter tuning (Optuna)',
          'K-Fold Cross Validation for generalization',
          'Final performance: Top 15% by SMAPE metric',
          'Non-linear temperature-consumption analysis (CDH/HDH transformation)',
        ],
      },
    },
    category: 'Data Science',
    techs: ['LightGBM', 'Python', 'Pandas', 'Optuna', 'scikit-learn'],
    github: 'https://github.com/wookidoki',
    period: '2025.01 ~ 2025.03',
    chartData: {
      modelComparison: {
        labels: ['Linear Reg.', 'Random Forest', 'XGBoost', 'LightGBM', 'LightGBM + FE'],
        labelsEn: ['Linear Reg.', 'Random Forest', 'XGBoost', 'LightGBM', 'LightGBM + FE'],
        data: [32.1, 18.4, 14.2, 12.8, 9.6],
        label: 'SMAPE (%)',
        labelEn: 'SMAPE (%)',
      },
    },
  },
  {
    id: 10,
    title: '패션 추천 시스템',
    ko: {
      subtitle: 'ResNet + SBERT 멀티모달 패션 추천',
      description: 'Selenium 크롤링으로 수집한 패션 데이터에 ResNet(이미지)과 SBERT(텍스트)를 결합한 멀티모달 추천 알고리즘을 구현한 프로젝트입니다.',
      detail: {
        overview: '패션 이커머스 환경에서 이미지 유사도와 텍스트 의미 유사도를 동시에 고려하는 멀티모달 추천 시스템을 구현한 프로젝트입니다. 사용자가 좋아하는 상품과 시각적으로 유사하면서도 설명 텍스트가 의미적으로 가까운 아이템을 추천합니다.',
        background: 'Selenium으로 패션 플랫폼의 상품 이미지와 설명 텍스트를 자동 수집하고, ResNet50으로 이미지 특징 벡터를, SBERT로 텍스트 임베딩 벡터를 각각 추출했습니다. 두 벡터를 가중 결합(weighted fusion)하여 코사인 유사도 기반 추천을 수행합니다. 이미지만 사용하는 추천 대비 사용자 만족도 지표가 향상되는 것을 확인했습니다.',
        role: '1인 개발 (크롤링 / 모델링 / 추천 알고리즘 / 평가)',
        highlights: [
          'Selenium 기반 패션 플랫폼 이미지 + 텍스트 자동 수집 크롤러 개발',
          'ResNet50 특징 추출 + SBERT 텍스트 임베딩 멀티모달 파이프라인',
          '가중 결합(α=0.6 이미지, 0.4 텍스트) + 코사인 유사도 추천',
          '단일 모달(이미지만) 대비 추천 정확도 향상 확인',
          '멀티모달 AI 아키텍처 설계 및 구현 경험',
        ],
      },
    },
    en: {
      subtitle: 'ResNet + SBERT Multimodal Fashion Recommendation',
      description: 'Built a multimodal fashion recommendation system combining ResNet (image) and SBERT (text) on Selenium-crawled fashion data.',
      detail: {
        overview: 'A multimodal recommendation system for fashion e-commerce that considers both visual similarity and textual semantic similarity. Recommends items that are visually similar and have semantically close descriptions.',
        background: 'Crawled product images and descriptions from fashion platforms using Selenium. Extracted image feature vectors with ResNet50 and text embeddings with SBERT. Combined both via weighted fusion for cosine similarity-based recommendations, demonstrating improved user satisfaction over image-only approaches.',
        role: 'Solo Developer (Crawling / Modeling / Recommendation Algorithm / Evaluation)',
        highlights: [
          'Selenium crawler for fashion platform image + text collection',
          'ResNet50 features + SBERT embeddings multimodal pipeline',
          'Weighted fusion (α=0.6 image, 0.4 text) + cosine similarity ranking',
          'Improved recommendation accuracy over single-modal (image-only)',
          'Multimodal AI architecture design and implementation',
        ],
      },
    },
    category: 'Data Science',
    techs: ['ResNet50', 'SBERT', 'Selenium', 'Python', 'PyTorch'],
    github: 'https://github.com/wookidoki',
    period: '2025.02 ~ 2025.04',
    chartData: {
      modalComparison: {
        labels: { ko: ['이미지만 (ResNet)', '텍스트만 (SBERT)', '멀티모달 (결합)'], en: ['Image Only (ResNet)', 'Text Only (SBERT)', 'Multimodal (Combined)'] },
        data: [0.68, 0.61, 0.79],
        label: { ko: '추천 정확도 (Precision@10)', en: 'Recommendation Accuracy (Precision@10)' },
      },
    },
  },
];

export const contactData = {
  github: 'https://github.com/wookidoki',
  email: 'wookidoki98@gmail.com',
  linkedin: '#',
  ko: { subtitle: '프로젝트 협업이나 궁금한 점이 있으시면 편하게 연락해 주세요.', linkedinLabel: '프로필 추가', footer: '이승욱. All rights reserved.' },
  en: { subtitle: 'Feel free to reach out for collaborations or questions.', linkedinLabel: 'Add Profile', footer: 'Seungwook Lee. All rights reserved.' },
};

export const projectsFilter = {
  ko: { all: '전체', Web: '웹', 'Data Science': '데이터 사이언스', Research: '연구' },
  en: { all: 'All', Web: 'Web', 'Data Science': 'Data Science', Research: 'Research' },
};

export const detailLabels = {
  ko: { overview: '개요', background: '배경 및 과정', role: '담당 역할', highlights: '핵심 성과', techStack: '기술 스택', liveDemo: '라이브 데모', back: '목록으로', viewDetail: '자세히 보기' },
  en: { overview: 'Overview', background: 'Background & Process', role: 'Role', highlights: 'Key Highlights', techStack: 'Tech Stack', liveDemo: 'Live Demo', back: 'Back to List', viewDetail: 'View Detail' },
};
