export const profile = {
  ko: {
    name: '이승욱',
    greeting: '안녕하세요',
    namePrefix: '풀스택 개발자 ',
    nameSuffix: '입니다',
    title: '풀스택 웹 개발자 & 데이터 사이언티스트',
    about: `웹 개발과 데이터 분석, 두 가지 역량으로 비즈니스를 설계하는 개발자입니다.
경영과 재무 회계를 공부하며 비즈니스에대한 이해도와 전공을 통해 데이터의 분석역량을 길렀으며 금융투자동아리 활동으로 다양한 산업의 도메인 지식을 갖추고있습니다.
또한 AWS 기반 풀스택 웹 개발 과정을 수료하며, 서비스 기획에서 ML/AL 기반 모델링과 React·Spring Boot를 이용한 개발 그리고 AWS, Docker 를 이용한 배포까지 폭넓은 기술 역량을 보유하고 있습니다.`,
  },
  en: {
    name: 'Seungwook Lee',
    greeting: 'Hello',
    namePrefix: "I'm Full-Stack Developer ",
    nameSuffix: '',
    title: 'Full-Stack Web Developer & Data Scientist',
    about: `A developer who designs business solutions with both web development and data analysis.
Studying business, finance, and accounting built my understanding of business, while my major honed my data analysis capabilities. Through the finance investment club, I gained diverse industry domain knowledge.
With AWS full-stack web development training, I have broad technical capabilities from service planning and ML/AI modeling to development with React and Spring Boot.`,
  },
  keywords: ['React', 'Java', 'Spring', 'Python', 'Oracle SQL', 'AWS'],
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
  { category: 'Frontend', items: ['React', 'Vite', 'Styled Components', 'Tailwind CSS', 'Zustand', 'Google Maps API'] },
  { category: 'Backend', items: ['Spring Boot', 'Node.js / Express', 'MyBatis', 'JPA', 'JWT', 'Spring Security'] },
  { category: 'Database', items: ['PostgreSQL', 'Oracle'] },
  { category: 'Data Science', items: ['Python', 'PyTorch', 'TensorFlow', 'BERT / SBERT', 'scikit-learn', 'Pandas'] },
  { category: 'NLP', items: ['KoNLPy', 'Gensim (LDA)', 'TF-IDF', 'NLTK', 'spaCy'] },
  { category: 'Infra / Tools', items: ['Docker', 'AWS (EC2, S3)', 'Nginx', 'Git', 'GitHub Actions'] },
];

export const githubUsername = 'wookidoki';

export const projects = [
  {
    id: 1,
    title: 'Earth:in',
    ko: {
      subtitle: '경기도 환경 탐험 게이미피케이션 웹앱',
      description: '경기도 27개 시군구 100여 개 환경 명소를 게이미피케이션으로 탐험하는 웹 플랫폼입니다. 카테고리(자연/수자원/생태/문화/스포츠)·지역별 필터링, 실시간 대기질 데이터 분석·시각화, 스탬프 수집·배지·레벨 시스템, Google OAuth 인증, 관리자 대시보드(일별 가입 추이·인기 명소 통계)까지 1인 풀스택 개발. 경기기후 플랫폼 경진대회 최우수상.',
      detail: {
        overview: `경기도 27개 시군구의 100여 개 환경 명소(자연, 수자원, 생태, 문화, 스포츠 5개 카테고리)를 게이미피케이션 방식으로 탐험하는 공공 서비스 웹 플랫폼입니다.
사용자는 카테고리·지역별 다중 필터링과 Google Maps 기반 인터랙티브 지도에서 명소를 탐색하고, 방문 시 스탬프를 수집하며, XP·레벨·배지(15종 이상)를 획득합니다. 실시간 대기질(AQI) 데이터와 기후 정보를 분석·시각화하고, 관리자 대시보드에서 일별 가입 추이·인기 명소 랭킹·방문 통계 등을 데이터 기반으로 모니터링할 수 있습니다. 댓글·사진 업로드·좋아요 등 소셜 기능까지 포함한 종합 서비스입니다.
1인 풀스택 개발로 기획, React 프론트엔드, Express 백엔드, PostgreSQL DB 설계, Docker 컨테이너화, AWS EC2 배포까지 전 과정을 수행했습니다.`,
        background: `경기도 기후환경정책과의 공모전에 참가하여, "기후 데이터를 시민이 직접 체험하게 만드는 서비스"를 기획했습니다.
초기에는 Three.js 기반 3D 지구본 시각화를 구현하기 시작했으나, 개발 중간 점검에서 모바일 로딩 속도 저하와 저사양 기기 구동 불가 문제를 확인했습니다. 화려한 기술 시연보다 "누구나 빠르게 접근 가능한 공공 서비스"라는 본질이 우선이라 판단하고, 며칠간 작성한 3D 코드를 전면 폐기했습니다. 이후 Google Maps API + 게이미피케이션이라는 새로운 방향으로 전환하여, 확보된 리소스를 마커 클러스터링, 배지 시스템, 소셜 기능에 집중 투자했습니다.
결과적으로 "직관적이고 누구나 사용하기 편리하다"는 평가를 받아 최우수상을 수상했습니다.`,
        role: '1인 풀스택 개발 (기획 / 프론트엔드 / 백엔드 / DB 설계 / 인프라 / 배포)',
        highlights: [
          'Google Maps API + 마커 클러스터링으로 100여 개 명소 인터랙티브 지도 구현',
          '카테고리(자연/수자원/생태/문화/스포츠) · 지역(27개 시군구) 다중 필터링 + 키워드 검색 기능',
          '실시간 대기질(AQI) API 연동 + 기후 데이터 분석·시각화 (수치 색상 구분, 단계별 안내)',
          '관리자 대시보드: 일별 가입 추이 차트, 인기 명소 랭킹, 방문 통계 집계·분석, 유저 관리',
          '게이미피케이션 엔진: 스탬프 수집, XP/레벨 시스템, 15종 이상 배지 (방문 횟수, 카테고리 마스터, 지역 탐험, 연속 방문 스트릭 등)',
          'Google OAuth 2.0 인증 + 커스텀 JWT 세션 관리 (168시간 만료, DB 검증)',
          '소셜 기능: 명소별 댓글(페이지네이션), 사진 업로드(5MB, S3/로컬 이중 지원), 좋아요',
          'PostgreSQL 10개 테이블 설계: UUID PK, JSONB 컬럼, 자동 타임스탬프 트리거, 캐스케이드 삭제',
          'Zustand persist 미들웨어로 게임 상태 로컬 저장 + 5초 디바운스 클라우드 동기화',
          'Docker Compose 3-tier 아키텍처 (Nginx 리버스 프록시 + Express + PostgreSQL) + 헬스체크',
          'Three.js 3D → Google Maps 2D 전환: 모바일 성능과 서비스 본질 우선의 기술적 판단',
          '경기기후 플랫폼 서비스 개발 경진대회 최우수상 수상',
        ],
      },
    },
    en: {
      subtitle: 'Gyeonggi-do Eco-Exploration Gamification Web App',
      description: 'A gamification web platform for exploring 100+ environmental spots across 27 Gyeonggi-do districts. Features category/region multi-filtering, real-time air quality data analysis & visualization, stamp collection, badges, leveling, Google OAuth, admin dashboard with signup trends & popular spot statistics. Solo full-stack development. Grand Prize winner.',
      detail: {
        overview: `A public service web platform where citizens explore 100+ environmental spots (nature, water, ecology, culture, sports) across 27 Gyeonggi-do districts through gamification.
Users filter spots by category and region, navigate an interactive Google Maps-based map, collect stamps by visiting, and earn XP, levels, and badges (15+ types). Real-time air quality (AQI) data analysis and climate information visualization, admin dashboard with daily signup trends, popular spot rankings, and visit statistics monitoring. Includes social features (comments, photo uploads, likes).
Solo full-stack development covering planning, React frontend, Express backend, PostgreSQL schema design, Docker containerization, and AWS EC2 deployment.`,
        background: `Developed for the Gyeonggi-do Climate & Environment Policy Division competition with the concept of "making climate data something citizens directly experience."
Initially implemented Three.js 3D globe visualization, but mid-development review revealed mobile loading issues and low-spec device incompatibility. Prioritizing accessible public service over flashy tech demos, I scrapped days of 3D code and pivoted to Google Maps API + gamification. Redirected resources into marker clustering, badge systems, and social features.
This decision led to the evaluation of "intuitive and universally accessible," winning the Grand Prize.`,
        role: 'Solo Full-Stack Developer (Planning / Frontend / Backend / DB Design / Infra / Deployment)',
        highlights: [
          'Google Maps API + marker clustering for 100+ interactive spot markers',
          'Category (nature/water/ecology/culture/sports) · region (27 districts) multi-filtering + keyword search',
          'Real-time AQI API integration + climate data analysis & visualization (color-coded levels, stage guidance)',
          'Admin dashboard: daily signup trend charts, popular spot rankings, visit statistics aggregation & analysis, user management',
          'Gamification engine: stamp collection, XP/level system, 15+ badges (visit count, category mastery, regional exploration, streak challenges)',
          'Google OAuth 2.0 + custom JWT session management (168h expiry, DB validation)',
          'Social features: paginated comments, photo uploads (5MB, S3/local dual support), likes',
          'PostgreSQL 10-table schema: UUID PKs, JSONB columns, auto-timestamp triggers, cascade deletes',
          'Zustand persist middleware for local game state + 5s debounced cloud sync',
          'Docker Compose 3-tier architecture (Nginx reverse proxy + Express + PostgreSQL) with health checks',
          'Three.js 3D → Google Maps 2D pivot: prioritizing mobile performance and service accessibility',
          'Grand Prize at Gyeonggi Climate Platform Development Competition',
        ],
      },
    },
    category: 'Web',
    techs: ['React 19', 'Zustand', 'Styled Components', 'Node.js', 'Express', 'PostgreSQL', 'Google Maps API', 'Google OAuth', 'Docker', 'Nginx', 'AWS EC2/S3'],
    github: 'https://github.com/wookidoki/earth-in',
    liveUrl: 'http://44.251.87.125',
    period: '2025.10 ~ 2025.12',
  },
  {
    id: 2,
    title: 'EarthWith',
    ko: {
      subtitle: '탄소중립 포인트 환경 커뮤니티 플랫폼',
      description: 'Spring Boot 3.5 + React 19 기반 환경 커뮤니티 플랫폼. 11개 컨트롤러 60+ REST API, JWT 이중 토큰 인증, 관리자 대시보드(게시글/댓글/회원/신고 관리), 소셜 피드(무한 스크롤), 뉴스 API 연동까지 포함한 팀 프로젝트에서 백엔드 전체를 설계·구현했습니다.',
      detail: {
        overview: `환경 보호 활동을 기록하고 커뮤니티로 공유하는 탄소중립 포인트 기반 웹 서비스입니다.
게시판(카테고리 필터링·검색·인기글), 소셜 피드(무한 스크롤·좋아요·댓글·북마크), 뉴스 API 연동, 탄소/물 발자국 계산기, 유저 랭킹, 관리자 대시보드(게시글·댓글·회원 관리·신고 처리·공지 CRUD) 등 종합적인 커뮤니티 기능을 구현했습니다.
KH정보교육원 세미 프로젝트로 진행된 팀 프로젝트이며, 저는 백엔드 아키텍처 설계부터 DB 스키마, REST API, 인증/인가, 예외 처리, 파일 업로드까지 백엔드 전체를 담당했습니다.`,
        background: `DB 스키마 설계 단계부터 "데이터 적재 효율성"을 최우선으로 삼았습니다.
게시글 상세 조회 시 게시글·댓글·첨부파일을 각각 조회하던 기존 방식(3회 DB 조회)을 MyBatis의 ResultMap Collection과 동적 SQL로 통합하여 1회 조회로 줄였습니다.
좋아요 기능에서는 매 조회마다 COUNT(*)를 수행하는 대신 TB_LIKE_COUNT 비정규화 테이블을 설계하여 토글 시 증감 업데이트하는 방식으로 읽기 성능을 최적화했습니다.
Soft Delete + Restore 패턴을 도입하여 관리자가 삭제된 게시글/댓글을 복원할 수 있게 하면서도, 일반 쿼리에서는 STATUS='Y' 필터로 성능 저하 없이 동작하도록 설계했습니다.
인증 체계는 JWT Access Token(24시간) + Refresh Token(72시간) 이중 구조로 설계하고, Spring Security의 OncePerRequestFilter를 확장한 JwtFilter에서 토큰 검증·만료·계정 정지 상태까지 체크합니다.
예외 처리는 40개 이상의 ErrorCode enum과 18개 이상의 커스텀 예외 클래스를 정의하고, @RestControllerAdvice 기반 GlobalExceptionHandler에서 일관된 JSON 에러 응답을 반환하도록 설계했습니다.`,
        role: '백엔드 전체 설계·구현 (DB 스키마 / REST API / 인증·인가 / 예외 처리 / 파일 업로드)',
        highlights: [
          'Spring Boot 3.5.7 + Java 21 기반 11개 컨트롤러, 60+ REST API 엔드포인트 설계·구현',
          'MyBatis ResultMap Collection + 동적 SQL(<choose>, <if>, <sql>)로 N+1 문제 해결 (3회 → 1회 통합 조회)',
          'JWT 이중 토큰: Access(24h) + Refresh(72h), BCrypt 패스워드 인코딩, Spring Security RBAC (USER/ADMIN)',
          'JwtFilter(OncePerRequestFilter): 토큰 파싱 → 만료 검증 → 계정 정지 확인 → SecurityContext 설정',
          '40+ ErrorCode enum + 18개 커스텀 예외 + @RestControllerAdvice GlobalExceptionHandler → 일관된 JSON 에러 응답',
          'TB_LIKE_COUNT 비정규화 테이블로 좋아요 카운트 읽기 성능 최적화 (COUNT(*) 제거)',
          'Soft Delete + Restore 패턴: STATUS 컬럼 기반 삭제/복원, 관리자 복원 기능 지원',
          '이중 페이지네이션: 게시판(오프셋 기반 RowBounds) + 피드(커서 기반 무한 스크롤)',
          'AWS S3 파일 업로드: 프로필/게시글/공지별 폴더 분리, 고유 파일명 생성 (Eco_timestamp_uuid)',
          '관리자 대시보드: 게시글·댓글·회원 관리, 신고 처리, 공지 CRUD, 통계 API',
          '외부 뉴스 API 연동 (환경 키워드 기반 뉴스 검색)',
          'Oracle DB 13+ 테이블 스키마 설계 (회원, 게시판, 댓글, 좋아요, 북마크, 첨부파일, 신고, 토큰 등)',
        ],
      },
    },
    en: {
      subtitle: 'Carbon-Neutral Point Environmental Community Platform',
      description: 'Environmental community platform built with Spring Boot 3.5 + React 19. Designed and implemented the entire backend: 11 controllers with 60+ REST APIs, dual JWT authentication, admin dashboard (post/comment/member/report management), social feed with infinite scroll, and news API integration.',
      detail: {
        overview: `A carbon-neutral point-based web service for recording and sharing environmental activities.
Features include boards (category filtering, search, trending posts), social feed (infinite scroll, likes, comments, bookmarks), news API integration, carbon/water footprint calculators, user rankings, and admin dashboard (post/comment/member management, report handling, notice CRUD).
A team project at KH Information Education Institute where I was responsible for the entire backend architecture — from DB schema design to REST APIs, authentication, exception handling, and file uploads.`,
        background: `Prioritized "data access efficiency" from the DB schema design phase.
Consolidated board detail queries (post + comments + attachments) from 3 DB calls to 1 using MyBatis ResultMap Collections with dynamic SQL.
For likes, replaced per-query COUNT(*) with a denormalized TB_LIKE_COUNT table that updates incrementally on toggle — optimizing read performance.
Implemented Soft Delete + Restore pattern allowing admins to recover deleted posts/comments while keeping STATUS='Y' filter for zero-overhead normal queries.
Auth system uses dual JWT tokens (Access 24h + Refresh 72h) with a custom JwtFilter extending OncePerRequestFilter for token validation, expiry checks, and account suspension detection.
Exception handling uses 40+ ErrorCode enums and 18+ custom exception classes with @RestControllerAdvice GlobalExceptionHandler for consistent JSON error responses.`,
        role: 'Full Backend Design & Implementation (DB Schema / REST API / Auth / Exception Handling / File Upload)',
        highlights: [
          'Spring Boot 3.5.7 + Java 21: 11 controllers, 60+ REST API endpoints',
          'MyBatis ResultMap Collection + dynamic SQL (<choose>, <if>, <sql>) resolving N+1 problem (3 queries → 1)',
          'Dual JWT tokens: Access (24h) + Refresh (72h), BCrypt password encoding, Spring Security RBAC (USER/ADMIN)',
          'Custom JwtFilter (OncePerRequestFilter): token parsing → expiry validation → account suspension check → SecurityContext setup',
          '40+ ErrorCode enum + 18 custom exceptions + @RestControllerAdvice GlobalExceptionHandler → consistent JSON error responses',
          'Denormalized TB_LIKE_COUNT table for optimized like count reads (eliminating COUNT(*))',
          'Soft Delete + Restore pattern: STATUS column-based deletion/recovery with admin restore support',
          'Dual pagination: offset-based (boards with RowBounds) + cursor-based (feed infinite scroll)',
          'AWS S3 file uploads: folder separation by type (profile/board/notice), unique filenames (Eco_timestamp_uuid)',
          'Admin dashboard: post/comment/member management, report handling, notice CRUD, statistics API',
          'External news API integration (environment keyword-based news search)',
          'Oracle DB 13+ table schema design (members, boards, comments, likes, bookmarks, attachments, reports, tokens)',
        ],
      },
    },
    category: 'Web',
    techs: ['Spring Boot 3.5', 'Java 21', 'MyBatis', 'Oracle', 'Spring Security', 'JWT', 'AWS S3', 'React 19', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/wookidoki/earthwith-be',
    liveUrl: 'http://54.245.198.152:8080',
    period: '2025.09 ~ 2025.10',
  },
  {
    id: 3,
    title: 'Replay',
    ko: {
      subtitle: 'Gen-Z 음악 소셜 플랫폼 (Spotify + TikTok + Pinterest)',
      description: 'React 18 + Vite 5 기반 음악 소셜 플랫폼. MY UNIVERSE 드래그앤드롭 캔버스 에디터(8종 위젯·50단계 Undo/Redo·줌·그리드), TikTok 스타일 숏폼 피드(무한 스크롤), 오디오 플레이어(큐·셔플·리피트), 6색 테마 + 다크/라이트 모드, Zustand 4개 스토어, 50+ 컴포넌트, 25+ 페이지의 대규모 프론트엔드 프로젝트.',
      detail: {
        overview: `Spotify + TikTok + Pinterest를 결합한 Gen-Z 타겟 음악 소셜 플랫폼입니다. 음악 검색·플레이리스트 큐레이션·숏폼 영상·인터랙티브 캔버스 등 8가지 핵심 기능을 50+ 컴포넌트, 25+ 페이지, 15,000+ LOC 규모로 구현했습니다.
플래그십 기능인 MY UNIVERSE는 사용자가 드래그앤드롭으로 플레이리스트·음악·스티커·텍스트·이미지·영상 등 8종 위젯을 배치하여 개인화된 창작 공간을 만드는 캔버스 에디터입니다. 50단계 Undo/Redo, 줌(25-200%), 그리드 정렬, 8종 프리셋 그라디언트 배경, 공개/비공개 발행 기능까지 갖추고 있습니다.
Zustand 4개 스토어(UI·Player·Universe·Modal)로 복잡한 상태를 관리하고, Styled Components 테마 프로바이더로 6색 프리셋 + 커스텀 컬러 + 다크/라이트 모드를 지원합니다.`,
        background: `KH정보교육원 팀 프로젝트로 프론트엔드를 담당했습니다. "음악을 듣는 것을 넘어 시각적으로 표현하고 공유하는 경험"을 기획 방향으로 삼았습니다.
MY UNIVERSE 캔버스 에디터 개발 시 React RND(드래그/리사이즈) 라이브러리와 Zustand 스토어의 50+ 메서드를 조합하여, 일반적인 CRUD를 넘어선 복잡한 인터랙티브 UI 상태 관리를 구현했습니다.
오디오 플레이어는 HTML5 Audio API를 커스텀 훅(useAudioPlayer)으로 추상화하고, usePlayerStore에서 큐·셔플·리피트·볼륨을 persist 미들웨어로 영속 저장합니다.
코드 스플리팅(React.lazy)으로 25+ 페이지를 지연 로딩하고, ErrorBoundary로 에러를 격리하며, 큐 기반 ModalManager로 다중 모달 동시 표시를 지원합니다.`,
        role: '프론트엔드 전체 개발 (UI/UX 설계 / 상태 관리 / 캔버스 에디터 / 오디오 / 테마)',
        highlights: [
          'MY UNIVERSE 캔버스 에디터: React RND 기반 8종 위젯 드래그앤드롭, 50단계 Undo/Redo, 줌(25-200%), 그리드 정렬',
          'TikTok 스타일 SHORTS: Intersection Observer 무한 스크롤, 좋아요/댓글, 영상 업로드, 그리드/피드 2종 레이아웃',
          'HTML5 Audio 기반 오디오 플레이어: 큐 관리, 셔플/리피트, 볼륨/뮤트, 자동 다음곡, Zustand persist 영속화',
          '6색 프리셋 테마 + 커스텀 컬러 피커 + 다크/라이트 모드 (Styled Components ThemeProvider + 100+ CSS 변수)',
          'Zustand 4개 스토어: useUiStore(테마), usePlayerStore(재생), useUniverseStore(캔버스 50+ 메서드), useModalStore(큐)',
          'Axios 인터셉터 + Bearer 토큰 인증, 4단계 회원가입 플로우, 프로필 시스템 (플레이리스트/좋아요/숏폼/북마크)',
          '음악 검색 API 연동: 실시간 검색, 아티스트/트랙 상세, 가사 표시, 신곡/차트 Top5',
          'React.lazy 코드 스플리팅 + ErrorBoundary + 큐 기반 ModalManager (13종 모달 동시 지원)',
          '50+ 컴포넌트, 25+ 페이지, 15,000+ LOC 규모의 대형 SPA 아키텍처',
        ],
      },
    },
    en: {
      subtitle: 'Gen-Z Music Social Platform (Spotify + TikTok + Pinterest)',
      description: 'Music social platform built with React 18 + Vite 5. Features MY UNIVERSE drag-and-drop canvas editor (8 widgets, 50-step undo/redo, zoom, grid), TikTok-style shorts feed (infinite scroll), audio player (queue, shuffle, repeat), 6-color themes + dark/light mode, 4 Zustand stores, 50+ components, 25+ pages.',
      detail: {
        overview: `A Gen-Z targeted music social platform combining Spotify + TikTok + Pinterest. Implements 8 core features across 50+ components, 25+ pages, and 15,000+ LOC.
The flagship MY UNIVERSE is a canvas editor where users place 8 widget types (playlist, music, sticker, text, image, video, shape, link) via drag-and-drop to create personalized creative spaces. Includes 50-step undo/redo, zoom (25-200%), grid alignment, 8 preset gradient backgrounds, and public/private publishing.
Manages complex state via 4 Zustand stores (UI, Player, Universe, Modal) and supports 6 preset color themes + custom colors + dark/light mode through Styled Components ThemeProvider.`,
        background: `Team project at KH Information Education Institute where I led frontend development. Designed around the concept of "expressing and sharing music visually, beyond just listening."
Built the MY UNIVERSE canvas editor combining React RND (drag/resize) with 50+ Zustand store methods for complex interactive UI state management beyond standard CRUD.
Audio player abstracts HTML5 Audio API into a custom hook (useAudioPlayer) with persistent queue, shuffle, repeat, and volume via Zustand persist middleware.
Code-split 25+ pages with React.lazy, isolate errors with ErrorBoundary, and support multiple simultaneous modals via queue-based ModalManager.`,
        role: 'Full Frontend Development (UI/UX / State Management / Canvas Editor / Audio / Theming)',
        highlights: [
          'MY UNIVERSE canvas editor: React RND drag-and-drop with 8 widget types, 50-step undo/redo, zoom (25-200%), grid alignment',
          'TikTok-style SHORTS: Intersection Observer infinite scroll, likes/comments, video upload, grid/feed dual layout',
          'HTML5 Audio player: queue management, shuffle/repeat, volume/mute, auto-advance, Zustand persist',
          '6 preset color themes + custom color picker + dark/light mode (Styled Components ThemeProvider + 100+ CSS variables)',
          '4 Zustand stores: useUiStore (theme), usePlayerStore (playback), useUniverseStore (canvas 50+ methods), useModalStore (queue)',
          'Axios interceptors + Bearer token auth, 4-step signup flow, profile system (playlists/favorites/shorts/bookmarks)',
          'Music search API: real-time search, artist/track detail, lyrics display, new releases/chart Top 5',
          'React.lazy code splitting + ErrorBoundary + queue-based ModalManager (13 modal types)',
          '50+ components, 25+ pages, 15,000+ LOC large-scale SPA architecture',
        ],
      },
    },
    category: 'Web',
    techs: ['React 18', 'Vite 5', 'Zustand', 'Styled Components', 'Framer Motion', 'React RND', 'Axios', 'React Router 6'],
    github: 'https://github.com/wookidoki/final-front',
    period: '2025.08 ~ 2025.09',
  },
  {
    id: 4,
    title: 'Steam Review Analysis',
    ko: {
      subtitle: 'Steam 리뷰 패치 영향 분석 (71,196건 · 30개 게임)',
      description: '30개 게임의 71,196건 Steam 리뷰를 6개월간 수집하고, BERT 감성 분석 + 7종 통계 검정으로 33개 패치의 유저 감성 영향을 정량 측정한 프로젝트입니다. 버그 수정(+0.54pp)과 대형 업데이트(-6.53pp)의 효과 차이를 p=0.0065, Cohen\'s d=1.107로 검증했습니다.',
      detail: {
        overview: `30개 게임(FPS·RPG·인디·멀티·시뮬레이션·논란작)에서 71,196건의 Steam 리뷰를 6개월간(2025.08~2026.01) 수집하고, BERT 다국어 감성 분석 모델로 긍정/부정/중립을 분류한 뒤, 33개 패치가 유저 감성에 미치는 영향을 7종 통계 검정으로 정량 분석한 데이터 사이언스 프로젝트입니다.
4-Cluster 유저 세분화(Devoted/Concerned/Betrayed/Churned), 패치 유형별 긍정률 변화 비교, 타깃 키워드 감소율 분석, 패치 빈도-감성 추세 상관분석까지 다층적 분석을 수행했습니다.`,
        background: `초기에는 "추천했지만 부정 리뷰를 남긴 유저(Concerned)"가 가장 건설적인 피드백을 줄 것이라는 가설로 4-Cluster 모델을 구축했습니다. 그러나 데이터 검증 과정에서 해당 유저군 대부분이 밈·풍자성 리뷰라는 사실을 발견하고 기존 프레임워크를 전면 폐기했습니다.
이후 "패치 유형별 유저 감성 변화 측정"으로 방향을 전환했습니다. ±21일 윈도우로 패치 전후 긍정률을 비교하고, Two-Proportion Z-Test로 개별 패치 유의성을, Mann-Whitney U Test로 버그 수정 vs 대형 업데이트 그룹 차이를, Wilcoxon Signed-Rank Test로 대형 업데이트의 체계적 부정 효과를 검증했습니다.
핵심 발견: 버그 수정 17건은 평균 +0.54pp, 대형 업데이트 10건은 평균 -6.53pp로, 두 그룹 차이가 p=0.0065(Mann-Whitney U), Cohen's d=1.107(대효과)로 통계적으로 매우 유의했습니다. 개별 패치 중 Hunt: Showdown Update 2.6은 -17.78pp(p<0.001)로 최대 부정 영향, Sea of Thieves Patch 3.5.3은 +15.81pp(p<0.001)로 최대 긍정 영향을 기록했습니다.
또한 타깃 키워드 감소율 분석에서 79개 패치-키워드 쌍 중 52%가 감소했으나, 이항 검정 결과 p=0.27로 우연 수준과 유의한 차이가 없음을 투명하게 보고했습니다.`,
        role: '1인 분석 (데이터 수집 / BERT 감성 분류 / 통계 검정 / 시각화 / 보고서)',
        highlights: [
          'Steam API 기반 71,196건 리뷰 수집 (30개 게임, 6개월, 월 500건/게임 목표)',
          'BERT 다국어 모델(nlptown/bert-base-multilingual-uncased-sentiment) 5점 척도 감성 분류',
          '4-Cluster 유저 세분화 모델: Devoted/Concerned/Betrayed/Churned → 가설 실패 시 즉시 폐기·방향 전환',
          '7종 통계 검정: Z-Test, Mann-Whitney U, Wilcoxon, Chi-Squared, Cohen\'s d, Bootstrap CI(5,000회), Spearman',
          '핵심 결과: 버그 수정(+0.54pp) vs 대형 업데이트(-6.53pp), p=0.0065, Cohen\'s d=1.107(대효과)',
          '33개 패치 개별 분석: 14개(42%) 통계적 유의, 최대 -17.78pp ~ +15.81pp 범위',
          'Wilcoxon 검정으로 대형 업데이트의 체계적 부정 효과 확인 (p=0.0059)',
          '타깃 키워드 79쌍 분석: 52% 감소했으나 이항 검정 p=0.27 → 유의하지 않음을 투명하게 보고',
          '패치 빈도-감성 추세 상관: Spearman p=0.29 → 패치 횟수 ≠ 감성 개선을 정직하게 보고',
          'Bootstrap 95% CI: 대형 업데이트 [-10.41, -2.86]pp → 신뢰 구간이 0을 포함하지 않아 견고한 결과',
        ],
      },
    },
    en: {
      subtitle: 'Steam Review Patch Impact Analysis (71,196 reviews · 30 games)',
      description: 'Collected 71,196 Steam reviews across 30 games over 6 months, using BERT sentiment analysis + 7 statistical tests to quantify the impact of 33 patches on player sentiment. Verified bugfix (+0.54pp) vs major update (-6.53pp) effect difference with p=0.0065, Cohen\'s d=1.107.',
      detail: {
        overview: `Collected 71,196 Steam reviews from 30 games (FPS, RPG, indie, multiplayer, simulation, controversial) over 6 months (Aug 2025 - Jan 2026), classified sentiment using a multilingual BERT model, then quantitatively analyzed the impact of 33 patches on player sentiment with 7 statistical tests.
Performed multi-layered analysis including 4-Cluster user segmentation, patch type comparison, target keyword reduction, and patch frequency-sentiment correlation.`,
        background: `Initially built a 4-Cluster model hypothesizing "Concerned" users (recommended but negative sentiment) would provide constructive feedback. Data validation revealed most were satirical/meme reviews, so the entire framework was scrapped.
Pivoted to "patch type sentiment impact measurement." Compared positive rates ±21 days around patches using Z-Tests for individual patches, Mann-Whitney U for bugfix vs major update groups, and Wilcoxon for systematic negative effects.
Key finding: Bugfix patches (n=17) averaged +0.54pp while major updates (n=10) averaged -6.53pp — difference significant at p=0.0065 (Mann-Whitney U), Cohen's d=1.107 (large effect). Hunt: Showdown Update 2.6 recorded the worst impact (-17.78pp, p<0.001), while Sea of Thieves Patch 3.5.3 recorded the best (+15.81pp, p<0.001).
Transparently reported that target keyword reduction (52% of 79 pairs) was not significant vs chance (binomial p=0.27), and patch frequency-sentiment correlation was not significant (Spearman p=0.29).`,
        role: 'Solo Analyst (Data Collection / BERT Sentiment / Statistical Testing / Visualization / Report)',
        highlights: [
          '71,196 reviews via Steam API (30 games, 6 months, 500 reviews/game/month target)',
          'Multilingual BERT model (nlptown/bert-base-multilingual-uncased-sentiment) 5-point sentiment classification',
          '4-Cluster user segmentation: Devoted/Concerned/Betrayed/Churned → scrapped on hypothesis failure',
          '7 statistical tests: Z-Test, Mann-Whitney U, Wilcoxon, Chi-Squared, Cohen\'s d, Bootstrap CI (5,000 samples), Spearman',
          'Key result: Bugfix (+0.54pp) vs Major update (-6.53pp), p=0.0065, Cohen\'s d=1.107 (large effect)',
          '33 individual patches analyzed: 14 (42%) statistically significant, range -17.78pp to +15.81pp',
          'Wilcoxon test confirming systematic negative effect of major updates (p=0.0059)',
          'Target keyword analysis: 52% of 79 pairs reduced but binomial p=0.27 → transparently reported as non-significant',
          'Patch frequency-sentiment correlation: Spearman p=0.29 → honestly reported as non-significant',
          'Bootstrap 95% CI for major updates: [-10.41, -2.86]pp → robust result excluding zero',
        ],
      },
    },
    category: 'Data Science',
    techs: ['Python', 'BERT', 'SciPy', 'Pandas', 'Bootstrap', 'Steam API'],
    github: 'https://github.com/wookidoki/steam-review-analysis',
    period: '2025.08 ~ 2026.01',
    chartData: {
      positiveRate: {
        labels: ['버그 수정 (17건)', '대형 업데이트 (10건)'],
        labelsEn: ['Bugfix (n=17)', 'Major Update (n=10)'],
        data: [0.54, -6.53],
        label: '평균 긍정률 변화 (pp)',
        labelEn: 'Mean Positive Rate Change (pp)',
      },
      statTest: {
        labels: { ko: ['버그vs대형 (Mann-Whitney)', '대형 업데이트 (Wilcoxon)', 'Hunt Update 2.6 (Z-test)', 'Cities Hotfix (Z-test)'], en: ['Bug vs Major (Mann-Whitney)', 'Major Updates (Wilcoxon)', 'Hunt Update 2.6 (Z-test)', 'Cities Hotfix (Z-test)'] },
        data: [0.0065, 0.0059, 0.001, 0.014],
        label: { ko: 'p-value (유의수준 0.05)', en: 'p-value (α = 0.05)' },
      },
    },
  },
  {
    id: 5,
    title: 'AI Ethics Evolution 2017-2024',
    ko: {
      subtitle: '4개 기관 13개 보고서 · SBERT+LDA · 62개 시각화',
      description: 'AI Now·Stanford AI Index·WEF·State of AI 4개 기관의 13개 보고서(2017-2024)를 SBERT(all-MiniLM-L6-v2, 384D) 임베딩 + LDA(10토픽) + TF-IDF로 분석하여 4개 윤리 카테고리의 연도별 변화를 추적한 프로젝트입니다. 기술 공정성(4.2배), 환경(0→주요 이슈), 기술 위협(딥페이크 8배), 정책·규제(5.7배) 성장을 정량 측정하고, EU/OECD/UNESCO 3개 윤리 프레임워크로 검증했습니다.',
      detail: {
        overview: `AI Now Institute·Stanford AI Index·World Economic Forum·State of AI 4개 기관에서 발행한 13개 AI 윤리 보고서(2017-2024)를 수집하고, SBERT 임베딩(all-MiniLM-L6-v2, 384차원) + LDA 토픽 모델링(10토픽, α=0.1, β=0.01) + TF-IDF 키워드 분석으로 4개 윤리 카테고리(기술 공정성, 환경 지속가능성, 기술 위협, 정책·규제)의 시계열 변화를 정량 추적한 NLP 연구 프로젝트입니다.
SBERT로 윤리 가이드라인 문장과 보고서 문장 간 코사인 유사도를 계산하고(임계값 ≥0.3), 연도별 카테고리 매칭 빈도를 추적하여 62개 분석 시각화(바 차트, 박스플롯, 히스토그램, 네트워크 그래프, 워드클라우드)를 생성했습니다.`,
        background: `학부 연구 프로젝트로, "AI 윤리 담론에서 환경 이슈가 어떻게 부상했는가"를 데이터로 규명하는 것이 목표였습니다.
13개 PDF 보고서를 파싱한 뒤, NLTK·spaCy로 토큰화·불용어 제거·스테밍을 수행하고, Gensim LDA와 scikit-learn TF-IDF로 토픽 구조를 추출했습니다. 이후 SBERT 임베딩으로 문장 수준의 의미 유사도를 계산하여 카테고리별 매칭 수를 정량화했습니다.
핵심 발견: 기술 공정성 4.2배 성장, 환경 지속가능성 거의 0에서 주요 이슈로 급부상(Green AI 개념 등장), 딥페이크 관련 기술 위협 8배 증가, 정책·규제 5.7배 성장(EU AI Act 영향). 2019년 AI Now 보고서, 2022년 EU AI Act 제안, 2023년 ChatGPT 출시가 주요 변곡점으로 확인되었습니다.
EU Ethics Guidelines·OECD AI Principles·UNESCO AI Ethics Recommendation 3개 국제 윤리 프레임워크로 연구 결과를 교차 검증했습니다.`,
        role: '1인 연구 (데이터 수집 / NLP 파이프라인 / SBERT 분석 / LDA 토픽 모델링 / 62개 시각화 / 보고서)',
        highlights: [
          '4개 기관(AI Now, Stanford AI Index, WEF, State of AI) 13개 보고서(2017-2024) 수집·분석',
          'SBERT all-MiniLM-L6-v2(384D) 임베딩 + 코사인 유사도(임계값 ≥0.3)로 문장 수준 카테고리 매칭',
          'Gensim LDA(10토픽, α=0.1, β=0.01) + scikit-learn TF-IDF 키워드 추출',
          '4개 윤리 카테고리 정량 성장: 기술 공정성 4.2배, 환경 0→주요, 딥페이크 위협 8배, 정책 5.7배',
          'AI Now 2023 보고서: 정책 451문장(2017년 94문장 대비 4.8배), AI Index 2024: 위협 109문장(2017년 2문장)',
          'WEF 환경 카테고리 특화: 2022년 112문장으로 전 기관 중 최고 (기관별 차별화 패턴 발견)',
          '주요 변곡점: 2019(AI Now 확대), 2020(코로나 → 허위정보), 2022(EU AI Act), 2023(ChatGPT)',
          'EU/OECD/UNESCO 3개 국제 윤리 프레임워크 교차 검증',
          '62개 분석 시각화 (바 차트, 박스플롯, 히스토그램, 네트워크 그래프, 워드클라우드)',
          'Jupyter Notebook(13MB) + 독립 Python 스크립트(29.2KB) 재현 가능한 코드 제공',
        ],
      },
    },
    en: {
      subtitle: '4 Institutions · 13 Reports · SBERT+LDA · 62 Visualizations',
      description: 'Analyzed 13 reports (2017-2024) from AI Now, Stanford AI Index, WEF, and State of AI using SBERT (all-MiniLM-L6-v2, 384D) + LDA (10 topics) + TF-IDF. Quantified growth across 4 ethics categories: Technical Fairness (4.2x), Environment (0→major), Tech Threats (deepfakes 8x), Policy (5.7x). Validated against EU/OECD/UNESCO frameworks.',
      detail: {
        overview: `Collected 13 AI ethics reports from 4 institutions (AI Now, Stanford AI Index, WEF, State of AI) spanning 2017-2024. Applied SBERT embeddings (all-MiniLM-L6-v2, 384D) + LDA topic modeling (10 topics, α=0.1, β=0.01) + TF-IDF keyword analysis to quantitatively track 4 ethics categories (Technical Fairness, Environmental Sustainability, Technological Threats, Policy & Regulation) over time.
Calculated sentence-level cosine similarity between ethics guidelines and report sentences (threshold ≥0.3), generating 62 analysis visualizations (bar charts, boxplots, histograms, network graphs, word clouds).`,
        background: `Undergraduate research aimed at quantifying the emergence of environmental issues in AI ethics discourse.
Parsed 13 PDF reports, performed tokenization/stopword removal/stemming with NLTK and spaCy, extracted topic structures with Gensim LDA and scikit-learn TF-IDF, then computed sentence-level semantic similarity with SBERT.
Key findings: Technical Fairness grew 4.2x, Environmental Sustainability surged from near-zero to major focus (Green AI concept), deepfake-related threats increased 8x, Policy & Regulation grew 5.7x (EU AI Act impact). Major inflection points: 2019 AI Now report, 2022 EU AI Act proposal, 2023 ChatGPT launch.
Cross-validated results against EU Ethics Guidelines, OECD AI Principles, and UNESCO AI Ethics Recommendation.`,
        role: 'Solo Researcher (Data Collection / NLP Pipeline / SBERT Analysis / LDA Topic Modeling / 62 Visualizations / Report)',
        highlights: [
          '13 reports from 4 institutions (AI Now, Stanford AI Index, WEF, State of AI) spanning 2017-2024',
          'SBERT all-MiniLM-L6-v2 (384D) embeddings + cosine similarity (threshold ≥0.3) for sentence-level matching',
          'Gensim LDA (10 topics, α=0.1, β=0.01) + scikit-learn TF-IDF keyword extraction',
          '4 ethics categories quantified: Fairness 4.2x, Environment 0→major, Deepfake threats 8x, Policy 5.7x',
          'AI Now 2023: 451 policy sentences (4.8x from 94 in 2017), AI Index 2024: 109 threat sentences (from 2 in 2017)',
          'WEF environment specialization: 112 sentences in 2022 (highest across all institutions)',
          'Key inflection points: 2019 (AI Now expansion), 2020 (COVID misinformation), 2022 (EU AI Act), 2023 (ChatGPT)',
          'Cross-validated against EU/OECD/UNESCO 3 international ethics frameworks',
          '62 analysis visualizations (bar charts, boxplots, histograms, network graphs, word clouds)',
          'Reproducible Jupyter Notebook (13MB) + standalone Python script (29.2KB)',
        ],
      },
    },
    category: 'Research',
    techs: ['SBERT', 'LDA', 'TF-IDF', 'NLTK', 'spaCy', 'Gensim', 'scikit-learn', 'Python'],
    github: 'https://github.com/wookidoki/AI-Ethics-Evolution-2017-2024',
    period: '2024.09 ~ 2024.12',
    chartData: {
      topicTrend: {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [
          { label: { ko: '기술 공정성', en: 'Technical Fairness' }, data: [35, 38, 32, 28, 25, 22, 20, 18] },
          { label: { ko: '환경/지속가능', en: 'Environment' }, data: [5, 6, 8, 14, 18, 22, 26, 30] },
          { label: { ko: '기술 위협', en: 'Tech Threats' }, data: [10, 12, 18, 24, 26, 28, 30, 32] },
          { label: { ko: '정책/규제', en: 'Policy/Regulation' }, data: [15, 16, 20, 22, 24, 28, 35, 38] },
        ],
      },
      topicDist2024: {
        labels: { ko: ['기술 공정성', '환경/지속가능', '기술 위협', '정책/규제'], en: ['Technical Fairness', 'Environment', 'Tech Threats', 'Policy/Regulation'] },
        data: [18, 30, 32, 38],
      },
    },
  },
  {
    id: 6,
    title: 'Image Analysis Deep Learning',
    ko: {
      subtitle: 'PyTorch CNN (CIFAR-10 85-90%) + TensorFlow DCGAN',
      description: 'CIFAR-10 데이터셋에서 3블록 CNN(~1.5M 파라미터)으로 85-90% 분류 정확도를 달성한 PyTorch 이미지 분류와, MNIST·CIFAR-10에서 DCGAN 이미지 생성 + 잠재 공간 보간(Interpolation)까지 구현한 TensorFlow 프로젝트입니다. 배치 정규화, 드롭아웃, 데이터 증강, LR 스케줄링 등 정규화 기법을 체계적으로 적용했습니다.',
      detail: {
        overview: `딥러닝의 두 핵심 과제인 이미지 분류(CNN)와 이미지 생성(GAN)을 각각 PyTorch와 TensorFlow로 구현한 프로젝트입니다.
분류: CIFAR-10(32×32 RGB, 10클래스, 50,000/10,000)에서 3블록 CNN(Conv→Conv→BatchNorm→MaxPool→Dropout × 3 + Dense)으로 약 1.5M 파라미터, 50에포크 학습, Adam + ReduceLROnPlateau로 85-90% 테스트 정확도를 달성했습니다.
생성: MNIST(28×28)와 CIFAR-10(32×32)에서 DCGAN을 구현했습니다. Generator(100D 노이즈 → 7×7×256 → Conv2DTranspose 3층 → Tanh), Discriminator(Conv2D 2층 → Dropout 0.3 → Dense)로 구성되며, tf.function + GradientTape 커스텀 학습 루프를 사용합니다. 잠재 공간 10단계 보간(Interpolation)으로 연속적 특징 공간 학습을 검증했습니다.`,
        background: `학부 딥러닝 프로젝트로, "하나의 과제를 두 프레임워크로 구현하며 차이를 체감한다"는 목표로 진행했습니다.
CNN 분류에서는 데이터 증강(랜덤 수평 플립, 4px 패딩 크롭)과 배치 정규화·드롭아웃(Conv 0.25, Dense 0.5)을 체계적으로 적용하여 과적합을 방지했습니다. ReduceLROnPlateau 스케줄러로 검증 손실 정체 시 LR을 50%씩 감소시켜 안정적 수렴을 달성했습니다.
GAN에서는 적대적 학습의 불안정성을 경험하며, 배치 크기 동적 처리, Generator/Discriminator 균형 조절 등을 직접 구현했습니다. DCGAN 확장으로 CIFAR-10 컬러 이미지 생성까지 성공하고, 잠재 공간 보간으로 Generator가 학습한 연속적 특징 공간을 시각적으로 검증했습니다.`,
        role: '1인 개발 (모델 설계 / 학습 파이프라인 / 정규화 / 평가 / 시각화)',
        highlights: [
          'PyTorch 3블록 CNN (~1.5M 파라미터): CIFAR-10에서 85-90% 테스트 정확도',
          '데이터 증강 (랜덤 수평 플립 + 4px 패딩 크롭) + 배치 정규화 + 드롭아웃 (0.25/0.5)',
          'Adam 옵티마이저 + ReduceLROnPlateau (검증 손실 정체 시 LR 50% 감소)',
          'TensorFlow DCGAN: Generator (100D→Conv2DTranspose×3→Tanh) + Discriminator (Conv2D×2→Dense)',
          'tf.function + GradientTape 커스텀 학습 루프로 적대적 학습 구현',
          'MNIST 깔끔한 숫자 생성 + CIFAR-10 DCGAN 확장 (인식 가능한 컬러 이미지 생성)',
          '잠재 공간 10단계 보간(Interpolation)으로 Generator의 연속적 특징 학습 검증',
          '혼동 행렬, 클래스별 Precision/Recall/F1, 학습 곡선 등 체계적 평가 시각화',
        ],
      },
    },
    en: {
      subtitle: 'PyTorch CNN (CIFAR-10 85-90%) + TensorFlow DCGAN',
      description: 'Achieved 85-90% classification accuracy on CIFAR-10 with a 3-block CNN (~1.5M params) in PyTorch, and implemented DCGAN image generation on MNIST/CIFAR-10 with latent space interpolation in TensorFlow. Systematic regularization with BatchNorm, Dropout, augmentation, and LR scheduling.',
      detail: {
        overview: `Two core deep learning tasks—image classification (CNN) and image generation (GAN)—implemented in PyTorch and TensorFlow respectively.
Classification: 3-block CNN on CIFAR-10 (32×32 RGB, 10 classes, 50K/10K) with ~1.5M parameters, 50 epochs, Adam + ReduceLROnPlateau, achieving 85-90% test accuracy.
Generation: DCGAN on MNIST (28×28) and CIFAR-10 (32×32). Generator (100D noise → 7×7×256 → 3 Conv2DTranspose layers → Tanh), Discriminator (2 Conv2D → Dropout 0.3 → Dense). Custom training loop with tf.function + GradientTape. 10-step latent space interpolation validates continuous feature learning.`,
        background: `Undergraduate deep learning project with the goal of implementing the same task in two frameworks to experience their differences.
Applied systematic regularization: data augmentation (random horizontal flip, 4px padding crop), batch normalization, dropout (0.25 conv, 0.5 dense), and ReduceLROnPlateau scheduler (50% LR reduction on validation plateau).
For GAN, experienced adversarial training instability firsthand, implementing dynamic batch handling and G/D balance tuning. Extended to DCGAN for CIFAR-10 color generation and verified continuous latent space via interpolation.`,
        role: 'Solo Developer (Model Design / Training Pipeline / Regularization / Evaluation / Visualization)',
        highlights: [
          'PyTorch 3-block CNN (~1.5M params): 85-90% test accuracy on CIFAR-10',
          'Data augmentation (random flip + 4px crop) + BatchNorm + Dropout (0.25/0.5)',
          'Adam optimizer + ReduceLROnPlateau (50% LR decay on validation plateau)',
          'TensorFlow DCGAN: Generator (100D→Conv2DTranspose×3→Tanh) + Discriminator (Conv2D×2→Dense)',
          'Custom adversarial training with tf.function + GradientTape',
          'Clean MNIST digit generation + CIFAR-10 DCGAN extension (recognizable color images)',
          '10-step latent space interpolation validating continuous feature learning',
          'Confusion matrix, per-class Precision/Recall/F1, training curves for systematic evaluation',
        ],
      },
    },
    category: 'Data Science',
    techs: ['PyTorch', 'TensorFlow', 'CNN', 'DCGAN', 'CIFAR-10', 'MNIST', 'scikit-learn', 'Python'],
    github: 'https://github.com/wookidoki/image-analysis-deep-learning',
    period: '2025.03 ~ 2025.05',
    chartData: {
      accuracy: {
        labels: ['Baseline CNN', '+ BatchNorm', '+ Dropout', '+ Augmentation'],
        labelsEn: ['Baseline CNN', '+ BatchNorm', '+ Dropout', '+ Augmentation'],
        data: [72, 80, 83, 88],
        label: 'CIFAR-10 분류 정확도 (%)',
        labelEn: 'CIFAR-10 Classification Accuracy (%)',
      },
    },
  },
  {
    id: 7,
    title: '환경윤리 설문조사 분석',
    ko: {
      subtitle: '3,040명 전국 설문 · 확장 TPB 모델 · 인터랙티브 대시보드',
      description: '2024년 전국 환경의식조사 3,040명 데이터를 확장 TPB(계획된 행동 이론) 모델로 분석한 연구입니다. 5개 변인(태도·주관적 규범·행동 통제·개인 규범·행동) 다중 회귀분석에서 태도(β=0.303)가 전 인구 집단에서 가장 강력한 예측 변인임을 확인했습니다. 연령(F=64.1, p<0.001), 성별, 소득별 하위 집단 회귀 모델과 9-Cell 세그먼테이션 분석, GitHub Pages 인터랙티브 대시보드까지 포함합니다.',
      detail: {
        overview: `2024년 전국 환경의식조사 3,040명(분석 표본 3,011명, 99% 완전 응답) 데이터를 확장 TPB(Theory of Planned Behavior) 모델로 분석한 연구입니다.
5개 핵심 변인(태도 α=0.743, 주관적 규범 α=0.769, 행동 통제 α=0.749, 개인 규범 α=0.752, 행동 α=0.812)에 대해 3개 회귀 가설을 검증했습니다. H2 통합 모델에서 태도(β=0.303, p<0.001)가 가장 강력한 예측 변인이며, 개인 규범(β=0.049, p=0.025)은 직접 효과가 미미하여 매개 변인으로 기능함을 확인했습니다.
5개 인구통계 변수(연령·성별·소득·학력 등) × 11개 이상 하위 집단 회귀 모델, 9-Cell 의식-행동 세그먼테이션, GitHub Pages 기반 인터랙티브 대시보드(Chart.js + Plotly.js)를 제작했습니다.`,
        background: `"왜 환경 의식은 높은데 실천은 낮은가?"라는 연구 질문에서 출발했습니다.
H1(개인 규범 형성): PN = 0.373·태도 + 0.379·주관적규범 + 0.088·행동통제 (R²=0.463)
H2(통합 TPB): 행동 = 0.303·태도 + 0.199·주관적규범 + 0.072·행동통제 + 0.049·개인규범 (R²=0.247)
H3(모델 비교): 순수 TPB R²=0.246 vs 통합 R²=0.247 → 개인 규범 ΔR²=0.001 (미미)
핵심 발견 ①: 태도가 전 인구 집단에서 지배적 예측 변인 (30대 β=0.368 최고, 60대 β=0.198에서는 주관적 규범 β=0.259가 역전)
핵심 발견 ②: 60대 이상에서 주관적 규범이 태도를 추월 → 가족/커뮤니티 기반 개입이 효과적
핵심 발견 ③: 의식-행동 괴리 평균 -0.172로 한국 표본에서는 서구 문헌 대비 괴리가 작음
핵심 발견 ④: 성별 차이 — 여성이 모든 심리적 구인에서 유의하게 높음 (PN t=10.26***, 태도 t=11.12***)
9-Cell 세그먼테이션: Elite(52.4%), Adequate(33.1%), Misaligned Conscious(2.1%) 등으로 인구를 분류하여 집단별 개입 전략을 제안했습니다.`,
        role: '1인 연구 (데이터 분석 / 회귀 모델링 / 하위 집단 분석 / 대시보드 / 보고서)',
        highlights: [
          '전국 환경의식조사 3,040명 데이터 분석 (3,011명 유효, 99% 완전 응답)',
          '확장 TPB 5개 변인, 전체 Cronbach α > 0.74 (행동 척도 α=0.812)',
          'H2 통합 회귀: 태도 β=0.303(p<0.001) 전 집단 최강 예측 변인, 개인 규범 β=0.049(매개 기능)',
          '60대+ 특이 패턴: 주관적 규범(β=0.259) > 태도(β=0.198) → 사회적 영향 기반 개입 필요',
          '연령 효과 ANOVA F=64.1(p<0.001): 20대(3.46) → 60대+(3.72) 환경 의식 점진 상승',
          '성별 차이: 여성 모든 구인에서 유의하게 높음 (PN t=10.26***, 태도 t=11.12***)',
          '9-Cell 의식-행동 세그먼테이션: Elite 52.4%, Adequate 33.1%, Misaligned 2.1%',
          '11개 이상 인구통계 하위 집단(연령 5, 성별 2, 소득 3 등) 개별 회귀 모델',
          'GitHub Pages 인터랙티브 대시보드 (Chart.js + Plotly.js, 62.3KB JSON 데이터)',
        ],
      },
    },
    en: {
      subtitle: '3,040 Respondents · Extended TPB Model · Interactive Dashboard',
      description: 'Analyzed 3,040 national environmental consciousness survey respondents using an extended TPB model. Attitude (β=0.303) confirmed as the strongest predictor across all demographic groups. Includes age (F=64.1, p<0.001), gender, income subgroup regression models, 9-Cell segmentation, and GitHub Pages interactive dashboard.',
      detail: {
        overview: `Analyzed 2024 national environmental consciousness survey data from 3,040 respondents (3,011 valid, 99% complete) using an extended Theory of Planned Behavior model.
Tested 3 regression hypotheses across 5 variables (Attitude α=0.743, Subjective Norm α=0.769, PBC α=0.749, Personal Norm α=0.752, Behavior α=0.812). H2 integrated model confirmed Attitude (β=0.303, p<0.001) as the strongest predictor, with Personal Norm (β=0.049, p=0.025) functioning as mediator rather than direct cause.
Built 11+ demographic subgroup regression models, 9-Cell consciousness-behavior segmentation, and GitHub Pages interactive dashboard (Chart.js + Plotly.js).`,
        background: `Started from the question "Why is environmental consciousness high but practice low?"
H2 integrated TPB: Behavior = 0.303·Attitude + 0.199·SN + 0.072·PBC + 0.049·PN (R²=0.247)
Key findings: Attitude dominates across all groups (30s β=0.368 highest; 60+ β=0.198 where SN β=0.259 overtakes). Consciousness-behavior gap mean=-0.172 (smaller than Western literature). Gender: women significantly higher on all constructs (PN t=10.26***, Attitude t=11.12***).
9-Cell segmentation: Elite (52.4%), Adequate (33.1%), Misaligned (2.1%) with group-specific intervention strategies.`,
        role: 'Solo Researcher (Data Analysis / Regression Modeling / Subgroup Analysis / Dashboard / Report)',
        highlights: [
          '3,040 national survey respondents analyzed (3,011 valid, 99% complete)',
          'Extended TPB 5 variables, all Cronbach α > 0.74 (Behavior scale α=0.812)',
          'H2 regression: Attitude β=0.303 (p<0.001) strongest predictor across all groups, PN β=0.049 (mediator)',
          '60+ unique pattern: SN (β=0.259) overtakes Attitude (β=0.198) → social influence-based intervention needed',
          'Age effect ANOVA F=64.1 (p<0.001): progressive increase from 20s (3.46) to 60+ (3.72)',
          'Gender differences: women significantly higher on all constructs (PN t=10.26***, Attitude t=11.12***)',
          '9-Cell consciousness-behavior segmentation: Elite 52.4%, Adequate 33.1%, Misaligned 2.1%',
          '11+ demographic subgroup regression models (5 age, 2 gender, 3 income groups)',
          'GitHub Pages interactive dashboard (Chart.js + Plotly.js, 62.3KB JSON data)',
        ],
      },
    },
    category: 'Research',
    techs: ['확장 TPB', '다중 회귀분석', 'Python', 'Chart.js', 'Plotly.js', 'GitHub Pages'],
    github: 'https://github.com/wookidoki/survey-environmental-ethics-2024',
    period: '2024.03 ~ 2024.06',
    chartData: {
      regression: {
        labels: { ko: ['태도 (Attitude)', '주관적 규범 (SN)', '행동 통제 (PBC)', '개인 규범 (PN)'], en: ['Attitude', 'Subjective Norm', 'Behav. Control', 'Personal Norm'] },
        data: [0.303, 0.199, 0.072, 0.049],
        pValues: [0.001, 0.001, 0.001, 0.025],
        label: { ko: '표준화 회귀계수 (β) - H2 통합 모델', en: 'Standardized β - H2 Integrated Model' },
      },
      modelFit: {
        labels: { ko: ['R² (설명력)', 'Cronbach α (행동)', 'ANOVA F (연령)'], en: ['R² (Explained)', 'Cronbach α (Behavior)', 'ANOVA F (Age)'] },
        data: [0.247, 0.812, 64.1],
        label: { ko: '모델 적합도', en: 'Model Fit' },
      },
    },
  },
  {
    id: 8,
    title: '교육과정-SDGs 텍스트 연계성 분석',
    ko: {
      subtitle: '2015 vs 2022 교과서 · UN SDGs 17개 목표 · 121개 시각화',
      description: '2015 개정 vs 2022 개정 가정교육 교과서(각 5권)와 UN SDGs 17개 목표 간 의미적 연계성을 TF-IDF + SBERT(xlm-r-large-en-ko-nli-ststb, 768D) + KoNLPy(Komoran)로 정량 분석한 연구입니다. 2022 교과서가 2015 대비 SDG 정렬도 +172.5% 향상, SDG 12(지속가능 소비) +1,787% 최대 개선을 확인했습니다. 121개 분석 시각화 포함.',
      detail: {
        overview: `2015 개정 교육과정과 2022 개정 교육과정의 가정교육 교과서(각 5권, 중학교 기술·가정 "생활자원" 단원)와 UN SDGs 17개 목표 텍스트 간의 의미적 연계성을 정량 분석한 연구입니다.
TF-IDF로 SDG별 상위 10개 키워드를 추출하고 교과서 내 빈도를 측정하는 키워드 스코어링과, SBERT(xlm-r-large-en-ko-nli-ststb, 768차원)로 교과서 문장과 SDG 기술문 간 코사인 유사도를 계산하는 의미 유사도 분석을 이중으로 수행했습니다.
핵심 결과: 2022 교과서의 평균 SDG 점수가 2015 대비 +172.5%(9.356→25.499), 중앙값 +233.9%(5.024→16.771) 향상. SDG 12(지속가능 소비·생산)가 +1,787.4%(5.154→97.281)로 최대 개선, SDG 11(지속가능 도시) +1,028.4%, SDG 13(기후행동) +308.0% 순이었습니다.`,
        background: `교수님의 의뢰로 시작된 프로젝트입니다. KoNLPy Komoran으로 형태소 분석·명사 추출·불용어 처리를 수행한 뒤, TF-IDF 키워드 스코어링과 SBERT 의미 유사도 분석을 이중으로 적용했습니다.
2022 개정 교과서에서 재활용·업사이클링·순환 경제·제로웨이스트 등 지속가능 소비 관련 내용이 대폭 추가되어 SDG 12가 +1,787% 성장한 반면, SDG 17(글로벌 파트너십) -71.4%, SDG 4(양질의 교육) -20.8%, SDG 5(성평등) -7.1%가 감소하여 교육과정 개선이 필요한 영역도 식별했습니다.
121개 분석 시각화(바 차트·박스플롯·히스토그램·연도별 비교)를 생성하고, 전체 분석 파이프라인을 Jupyter Notebook(3.36MB) + 독립 Python 스크립트(696줄)로 재현 가능하게 제공했습니다.`,
        role: '1인 연구 (텍스트 수집 / KoNLPy 전처리 / TF-IDF + SBERT 분석 / 121개 시각화 / 보고서)',
        highlights: [
          '2015 vs 2022 가정교육 교과서 각 5권(총 10권) + UN SDGs 17개 목표 텍스트 분석',
          'KoNLPy Komoran 형태소 분석 → 명사 추출 → 불용어 처리 전처리 파이프라인',
          'TF-IDF 키워드 스코어링 + SBERT xlm-r-large-en-ko-nli-ststb(768D) 의미 유사도 이중 분석',
          '2022 교과서 SDG 정렬도 +172.5% 향상 (평균 9.356→25.499, 중앙값 +233.9%)',
          'SDG 12(지속가능 소비) +1,787.4% 최대 개선, SDG 11(도시) +1,028.4%, SDG 13(기후) +308.0%',
          'SDG 17(파트너십) -71.4%, SDG 5(성평등) -7.1% 감소 → 교육과정 개선 필요 영역 식별',
          '121개 분석 시각화 (바 차트, 박스플롯, 히스토그램, SDG별 상세 분석)',
          'Jupyter Notebook(3.36MB) + Python 스크립트(696줄) 재현 가능한 코드 공개',
        ],
      },
    },
    en: {
      subtitle: '2015 vs 2022 Textbooks · 17 UN SDGs · 121 Visualizations',
      description: 'Quantitatively analyzed semantic alignment between 2015 vs 2022 revised home economics textbooks (5 each) and 17 UN SDGs using TF-IDF + SBERT (xlm-r-large-en-ko-nli-ststb, 768D) + KoNLPy (Komoran). 2022 textbooks showed +172.5% SDG alignment improvement, with SDG 12 (Sustainable Consumption) +1,787% maximum gain. Includes 121 analysis visualizations.',
      detail: {
        overview: `Analyzed semantic alignment between 2015 and 2022 revised curriculum home economics textbooks (5 each, "Living Resources" section) and 17 UN SDG target texts.
Dual analysis: TF-IDF keyword scoring (top 10 keywords per SDG, frequency counting) and SBERT (xlm-r-large-en-ko-nli-ststb, 768D) sentence-level cosine similarity.
Key results: 2022 textbooks averaged +172.5% higher SDG scores (9.356→25.499), median +233.9%. SDG 12 (Sustainable Consumption) improved +1,787.4%, SDG 11 (Cities) +1,028.4%, SDG 13 (Climate) +308.0%.`,
        background: `Commissioned by a professor. Applied KoNLPy Komoran morphological analysis with noun extraction and stopword removal, then dual TF-IDF + SBERT analysis.
2022 textbooks showed massive gains in sustainability content (recycling, upcycling, circular economy, zero-waste), while SDG 17 (Partnerships) declined -71.4%, SDG 4 (Education) -20.8%, SDG 5 (Gender) -7.1%—identifying areas needing curriculum improvement.
Generated 121 analysis visualizations and provided reproducible code via Jupyter Notebook (3.36MB) + Python script (696 lines).`,
        role: 'Solo Researcher (Text Collection / KoNLPy Preprocessing / TF-IDF + SBERT Analysis / 121 Visualizations / Report)',
        highlights: [
          '2015 vs 2022 home economics textbooks (5 each, 10 total) + 17 UN SDG target texts',
          'KoNLPy Komoran morphological analysis → noun extraction → stopword removal pipeline',
          'Dual analysis: TF-IDF keyword scoring + SBERT xlm-r-large-en-ko-nli-ststb (768D) semantic similarity',
          '2022 textbooks: +172.5% SDG alignment (mean 9.356→25.499, median +233.9%)',
          'SDG 12 (Sustainable Consumption) +1,787.4% max improvement, SDG 11 +1,028.4%, SDG 13 +308.0%',
          'SDG 17 (Partnerships) -71.4%, SDG 5 (Gender) -7.1% decline → curriculum gaps identified',
          '121 analysis visualizations (bar charts, boxplots, histograms, per-SDG analysis)',
          'Reproducible Jupyter Notebook (3.36MB) + Python script (696 lines)',
        ],
      },
    },
    category: 'Research',
    techs: ['SBERT', 'KoNLPy (Komoran)', 'TF-IDF', 'Gensim', 'scikit-learn', 'Python'],
    github: 'https://github.com/wookidoki/Living-Resources-SDG-Analysis',
    period: '2024.03 ~ 2024.08',
    chartData: {
      similarity: {
        labels: { ko: ['2015 교과서 평균', '2022 교과서 평균'], en: ['2015 Textbooks Avg', '2022 Textbooks Avg'] },
        data: [9.4, 25.5],
        label: { ko: 'SDG 정렬 점수 (+172.5%)', en: 'SDG Alignment Score (+172.5%)' },
      },
      sdgHeatmap: {
        labels: { ko: ['SDG 12 소비', 'SDG 7 에너지', 'SDG 13 기후', 'SDG 11 도시', 'SDG 9 산업', 'SDG 4 교육', 'SDG 5 성평등'], en: ['SDG 12 Consumption', 'SDG 7 Energy', 'SDG 13 Climate', 'SDG 11 Cities', 'SDG 9 Industry', 'SDG 4 Education', 'SDG 5 Gender'] },
        data: [97.3, 45.3, 42.7, 37.8, 18.9, 12.5, 8.2],
        label: { ko: '2022 교과서 SDG별 정렬 점수', en: '2022 Textbook SDG Alignment Score' },
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
