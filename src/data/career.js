// 경력기술서 본문. 형식: 회사 → 프로젝트(기간·고객·역할) → 주요 업무(명사형) → 사용 기술.
// 고객사는 일반 표기. 고객 운영 수치는 쓰지 않는다.

export const person = {
  name: '이승욱',
  nameEn: 'SEUNGWOOK LEE',
  email: 'wookidoki98@gmail.com',
  github: 'https://github.com/wookidoki',
  photo: '/profile.jpg',
};

export const tracks = {
  dev: {
    label: '개발',
    roles: ['FULL-STACK DEVELOPER', 'UNIFIER INTEGRATION', 'DATA AUTOMATION'],
    headline: ['풀스택 개발자', '이승욱'],
    summary: 'B2B 전자조달 플랫폼 개발 · Oracle Primavera Unifier 연동 업무 도구 개발',
  },
  consult: {
    label: '컨설팅',
    roles: ['UNIFIER CONSULTANT', 'BP ARCHITECT', 'PMIS · AWP'],
    headline: ['Unifier 컨설턴트', '이승욱'],
    summary: 'Oracle Primavera Unifier 구축 제안 · BP 설계 · 운영 유지보수',
  },
};

export const strengths = [
  {
    key: 'fullstack',
    title: '풀스택 개발',
    body: 'B2B 전자조달 플랫폼 기능 개발, 개인정보 암호화 적용, 폐쇄망 배포',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle'],
  },
  {
    key: 'unifier',
    title: 'Oracle Primavera Unifier',
    body: 'BP 설계(uDesigner), REST API 연동, BI Publisher 출력물, 업무 자동화 도구',
    tags: ['uDesigner', 'REST API', 'BI Publisher', 'VBA'],
  },
  {
    key: 'ai',
    title: 'AI · 데이터 모델링',
    body: '머신러닝 주식 매매 모델 개발, 텍스트 마이닝·자연어 처리 연구(SBERT, LDA)',
    tags: ['LightGBM', 'SBERT', 'LDA', 'pandas'],
  },
  {
    key: 'domain',
    title: '금융 · 경영',
    body: '경영정보학 전공, 투자자문사 공동 창업 및 운영',
    tags: ['경영정보학', '투자자문', '데이터 분석'],
  },
];

export const experience = [
  {
    company: '디티솔루션',
    companyEn: 'DT Solution',
    desc: 'EPC 도메인 IT 솔루션 · SI',
    role: 'IT 컨설턴트 · 개발',
    start: '2026.03',
    end: '재직 중',
    projects: [
      {
        kind: 'dev',
        name: 'B2B 전자조달 플랫폼 구축·고도화',
        order: { dev: 1, consult: 6 },
        client: '조선·해양 대형사',
        period: '2026.04 – 2026.06',
        role: '풀스택 개발',
        tasks: [
          '입찰(RFQ·차수·재입찰), 발주·계약, PQ 평가, 협력사 관리 기능 개발',
          '개인정보 암호화 적용 (ORM 커스텀 타입 방식, 서비스 코드 수정 없이 적용)',
          '암호화 데이터 마이그레이션 작성 (원복 가능한 양방향 구조)',
          '스케줄러 서버 분리, 헬스체크 및 로드밸런서 구성',
          '입찰 화면 조회 성능 개선 (N+1 쿼리 제거)',
          '폐쇄망 배포 (외부망, 보안점검, 내부망 3단계)',
        ],
        stack: ['Next.js', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'SOAP', 'PM2', 'Nginx'],
      },
      {
        kind: 'consult',
        name: 'AWP 기반 통합 건설관리시스템(CMS) 제안 및 PoC',
        order: { dev: 2, consult: 1 },
        client: '조선·해양 대형사',
        period: '2026.06 – 현재',
        role: '요건 정의, BP 설계, 웹앱 개발',
        tasks: [
          '고객 요구사항 8개 기능 영역을 Unifier BP 구조로 매핑',
          'AWP BP 설계 (작업구역, 작업패키지, 설치작업패키지, 객체 매핑, 검사, 진척기준)',
          '작업 패키지 3D 진척 뷰어 개발 (폐쇄망 환경, 한·영·일 지원)',
          '진척률·공수 집계 공식 오류 수정 및 검증',
          '시연 시나리오 작성, 한국어·영어 시연 영상 제작',
        ],
        stack: ['Unifier uDesigner', 'REST API', 'Next.js', 'Three.js', 'glTF/IFC'],
      },
      {
        kind: 'consult',
        name: 'Oracle Primavera Unifier 운영 유지보수',
        order: { dev: 3, consult: 2 },
        client: '국내 대형 EPC사 (반도체 공장 현장)',
        period: '2026.05 – 현재',
        role: '운영지원, 업무 도구 개발',
        tasks: [
          '현장 출역 관리 엑셀 도구에 업체 일괄 등록·대량 수정 기능 추가 (현장 배포)',
          '작업일보 1년치 데이터 이관 (엑셀 파싱, REST API 등록, 원본 대조 검증)',
          '계정·권한 일괄 처리 도구 개발 (사전 검증, 테스트 모드, 실행 로그)',
          '문서 검토 이력 전수조사 (전 프로젝트 REST 수집, 판정 로직 작성)',
          '품질검사 문서번호 체계 이관, 품질검사 마스터 현장 간 동기화',
          'BI Publisher 커스텀 출력물 제작, 출력 지연 결함 Oracle SR 제출',
          '월별 라이선스 사용 현황 리포트 자동화 (SQL, BI Publisher, VBA)',
          '운영 요청 이력 분석, 표준작업명세서·운영매뉴얼 작성',
        ],
        stack: ['Unifier REST API', 'BI Publisher', 'Python', 'PowerShell', 'VBA'],
      },
      {
        kind: 'consult',
        name: '신규 업무 BP 설계 (RFI, 변경관리, 설계변경)',
        order: { dev: 4, consult: 3 },
        client: '국내 대형 EPC사',
        period: '2026.09 – 2026.10',
        role: 'BP 설계',
        tasks: [
          '요구정의서·절차서 기반 RFI, CP/CR, Change Order, 설계변경 요청서 BP 설계',
          'BP XML 생성 도구 개발 (설정 파일에서 XML, 구조 검사, 워크플로 그림 생성)',
          '요구정의서 불일치 항목 정리 및 BP 사양서 작성',
          '등급 자동 판정, 공종별 복수 검토 워크플로 설계',
        ],
        stack: ['Python', 'Unifier uDesigner XML'],
      },
      {
        kind: 'consult',
        name: '엔지니어링 데이터베이스(EDB) PoC',
        order: { dev: 6, consult: 4 },
        client: '자사 솔루션',
        period: '2026.10',
        role: 'BP 생성, 서버 설정',
        tasks: [
          '배관·계기·전기·케이블·밸브 목록 등 BP 15종 생성',
          '풀다운, 연동 데이터셋, 데이터 피커 REST API로 구성',
          '라인 데이터 API 동작 검증 및 제약사항 정리',
        ],
        stack: ['Python', 'Unifier REST API'],
      },
      {
        kind: 'consult',
        name: '설비 완성관리 BP 구축',
        order: { dev: 7, consult: 5 },
        client: '조선·해양 대형사 (개발 환경)',
        period: '2026.08',
        role: 'BP 설계, 테스트',
        tasks: ['설비 단위 완성관리 BP 5종 신규 설계, 기존 BP 4종 수정', '업무 순서대로 레코드를 생성하는 시나리오 테스트 작성'],
        stack: ['Unifier uDesigner', 'Node.js', 'REST API'],
      },
      {
        kind: 'dev',
        name: '자사 홈페이지 구축·운영',
        order: { dev: 5, consult: 7 },
        client: '재직사',
        period: '2026.06 – 현재',
        role: '기획, 디자인, 개발, 배포 (단독)',
        tasks: ['4개 국어 기업 홈페이지 개발 및 운영', '산업별 소개 페이지, 블로그, SEO, 방문 분석 구성', '회사소개서 5개 언어 PDF 자동 생성'],
        stack: ['Next.js', 'CSS Modules', 'next-intl'],
      },
      {
        kind: 'dev',
        name: '회의 통번역 도구',
        order: { dev: 8, consult: 8 },
        client: '사내',
        period: '2026.08',
        role: '설계, 개발',
        tasks: ['음성 인식 및 번역 파이프라인 개발', '전사·번역 품질 평가 도구 작성'],
        stack: ['Python', 'faster-whisper', 'NLLB'],
      },
    ],
  },
  {
    company: '탑프로홀딩스',
    companyEn: 'TopPro Holdings',
    desc: '투자자문업',
    role: '공동 창업',
    start: '2024.04',
    end: '2025.07',
    projects: [
      {
        kind: 'biz',
        name: '투자자문 사업 운영',
        client: '',
        period: '2024.04 – 2025.07',
        role: '공동 창업',
        tasks: ['투자자문 서비스 기획', '고객 영업 및 회사 운영'],
        stack: [],
      },
    ],
  },
];

export const personal = [
  {
    name: 'AI 주식 매매 모델 개발',
    period: '2026.10 – 현재',
    role: '1인 개발',
    tasks: [
      '국내 주식 10년치 일봉·수급·공시 데이터 수집 파이프라인 구축',
      'LightGBM 종목 점수 모델 개발 (walk-forward 검증, 다중 모델 배깅)',
      '매매 전략별 모델 결합 및 백테스트 엔진 개발 (종가 지정가, 시가 단타)',
      '장 마감 후 자동 수집·점수 계산·신호 게시, 장 시작 모의 매매 자동 기록',
      '시세 데이터 오류(대체거래소 체결 혼입) 발견 및 정규장 종가 복원',
      '미국 시장 데이터로 모델 확장 연구',
    ],
    stack: ['Python', 'pandas', 'LightGBM', 'FastAPI', 'SQLite', 'Next.js'],
  },
  {
    name: 'Earth:in (경기기후 플랫폼 경진대회 최우수상)',
    period: '2025.10 – 2025.12',
    role: '1인 풀스택',
    tasks: ['경기도 환경 명소 탐방 웹 서비스 (지도, 스탬프·배지, 실시간 대기질)', '관리자 대시보드 개발', 'Docker Compose 구성, AWS EC2 배포'],
    stack: ['React', 'Express', 'PostgreSQL', 'Docker', 'AWS'],
    link: 'https://github.com/wookidoki/earth-in',
  },
];

// 연구 (대학 연구·교수 의뢰). 논문 게재 정보는 확인되면 venue에 추가.
export const research = [
  {
    name: '가정과 교육과정 생활자원 영역의 UN SDGs 반영도 분석',
    period: '2024.03 – 2024.08',
    role: '교수 의뢰 연구 · 분석 단독',
    tasks: [
      '2015·2022 개정 교육과정 교과서(각 5권)와 UN SDGs 17개 목표 텍스트 비교',
      'TF-IDF 키워드 점수와 SBERT 의미 유사도 이중 분석',
      '개정 교육과정에서 지속가능 소비·생산 내용 증가와 보완 필요 영역 도출',
    ],
    stack: ['Python', 'KoNLPy', 'TF-IDF', 'SBERT'],
    link: 'https://github.com/wookidoki/Living-Resources-SDG-Analysis',
  },
  {
    name: '소비자 교육과정 변화 분석',
    period: '2024',
    role: '분석 단독',
    tasks: ['2015·2022·2024 교육과정 문서 키워드·토픽 변화 분석', '가정교육 기준서 비교, 교육과정과 UN SDGs 연관성 분석'],
    stack: ['Python', 'KoNLPy', 'LDA', 'SBERT'],
    link: 'https://github.com/wookidoki/consumer-education-research',
  },
  {
    name: 'AI 윤리 담론 변화 분석 (2017–2024)',
    period: '2024.09 – 2024.12',
    role: '학부 연구 · 1인',
    tasks: [
      '4개 기관 AI 윤리 보고서 13건 수집, 공정성·환경·위협·규제 4개 범주 시계열 분석',
      'SBERT 문장 유사도와 LDA 토픽 모델링으로 범주별 비중 변화 정량화',
      'EU·OECD·UNESCO 윤리 가이드라인으로 결과 교차 검증',
    ],
    stack: ['Python', 'SBERT', 'LDA', 'spaCy'],
    link: 'https://github.com/wookidoki/AI-Ethics-Evolution-2017-2024',
  },
  {
    name: '환경윤리 의식·행동 분석 (전국 설문)',
    period: '2024.03 – 2024.06',
    role: '1인 연구',
    tasks: [
      '2024 전국 환경의식조사 데이터로 확장 계획행동이론(TPB) 모델 회귀 분석',
      '연령·성별 등 하위 집단별 모델 비교, 의식-행동 세그먼트 분류',
      '결과 대시보드 제작 (GitHub Pages)',
    ],
    stack: ['Python', 'statsmodels', 'Plotly'],
    link: 'https://github.com/wookidoki/survey-environmental-ethics-2024',
  },
];

export const skills = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Drizzle ORM', 'Three.js',
  'Oracle Primavera Unifier', 'uDesigner', 'REST API', 'BI Publisher', 'Python', 'pandas',
  'PowerShell', 'VBA', 'Excel COM', 'LightGBM', 'SBERT', 'FastAPI', 'Docker', 'Nginx', 'Vercel', 'GitHub Actions',
];

export const education = [
  { name: '동국대학교 경영정보학과', detail: '학사', period: '2017.03 – 2026.12 (졸업예정)' },
  { name: 'KH정보교육원', detail: 'AWS 풀스택 웹 개발자 과정 수료', period: '2025.07 – 2026.02' },
  { name: '금융투자 동아리 RICH', detail: '교육부장 · 매크로팀장 · 해외주식 팀장', period: '2018 – 2024' },
];

export const awards = [
  { name: '경기기후 플랫폼 서비스 개발 경진대회 최우수상', detail: '경기도', period: '2025.12' },
  { name: '데이터분석 준전문가 (ADsP)', detail: '한국데이터산업진흥원', period: '2025.07' },
];
