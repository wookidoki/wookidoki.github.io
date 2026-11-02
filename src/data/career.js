// 경력기술서 본문. 표준 형식: 회사 → 프로젝트(기간·고객·역할) → 주요 업무 → 사용 기술.
// 고객사는 마스킹 표기. 고객 운영 수치는 쓰지 않는다. 근거: me/13 대외본, worklog(9~11월).

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
    roles: ['풀스택 개발자', '데이터 자동화 엔지니어', 'Unifier 연동 개발자'],
    headline: ['운영 중인 시스템을', '설계하고 개발합니다'],
    summary:
      'Next.js·TypeScript 기반 B2B 전자조달 플랫폼을 개발했고, Oracle Primavera Unifier와 REST API로 연동되는 업무 도구·데이터 이관 파이프라인을 만들고 있습니다.',
  },
  consult: {
    label: '컨설팅',
    roles: ['Unifier 구현 컨설턴트', 'PMIS · AWP 설계', 'BP 설계 · 자동화'],
    headline: ['건설 프로젝트 관리 시스템을', '설계하고 구현합니다'],
    summary:
      '대형 EPC사와 조선·해양 대형사의 Oracle Primavera Unifier 구축·운영에 참여해 요구정의, BP 설계, 데이터 이관, 운영 자동화를 맡고 있습니다.',
  },
};

// 핵심 역량 (상단 카드)
export const strengths = [
  {
    key: 'fullstack',
    title: '풀스택 개발',
    body: 'Next.js·TypeScript·PostgreSQL로 실제 운영 서비스의 기능 개발과 데이터 보안 전환을 맡았습니다.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle'],
  },
  {
    key: 'unifier',
    title: 'Oracle Primavera Unifier',
    body: '요구정의서에서 BP를 설계하고, REST API·BI Publisher·데이터 뷰로 연동과 리포트를 구현합니다.',
    tags: ['uDesigner', 'REST API', 'BI Publisher', 'AWP'],
  },
  {
    key: 'automation',
    title: '데이터 자동화',
    body: '대용량 이관, 서버 부하를 고려한 수집, 검증 규칙을 내장한 운영 도구를 Python·PowerShell·VBA로 만듭니다.',
    tags: ['Python', 'PowerShell', 'VBA', 'Excel COM'],
  },
  {
    key: 'domain',
    title: '금융 · 비즈니스 이해',
    body: '경영정보학을 전공했고 투자자문사를 공동 창업해 운영했습니다. 업무 요구를 시스템 구조로 옮깁니다.',
    tags: ['경영정보학', '투자자문', '데이터 분석'],
  },
];

// kind: dev(개발) / consult(컨설팅). 트랙에 따라 같은 회사 안에서 순서만 바뀐다.
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
        client: '조선·해양 대형사',
        period: '2026.04 – 2026.06',
        role: '풀스택 개발',
        tasks: [
          '입찰(RFQ·차수·재입찰), 발주·일반계약, PQ 평가, 협력사 관리 기능 개발',
          '개인정보 컬럼 암호화 전환 설계·구현·운영 배포 — ORM 타입 레이어에 암·복호화를 넣어 서비스 코드 수정 없이 전환',
          '검색 유지를 위한 결정적 암호화, 되돌릴 수 있는 양방향 마이그레이션 설계',
          '스케줄러 서버 분리, 헬스체크·로드밸런서 구성, 입찰 화면 N+1 쿼리 개선',
          '외부망 → 보안점검 → 내부망 3단계 폐쇄망 배포',
        ],
        stack: ['Next.js', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'SOAP', 'PM2', 'Nginx'],
      },
      {
        kind: 'consult',
        name: 'AWP 기반 통합 건설관리시스템(CMS) 제안·PoC',
        client: '조선·해양 대형사',
        period: '2026.06 – 현재',
        role: '요건 정의 · BP 설계 · 웹앱 개발 · 시연',
        tasks: [
          '계획·AWP·품질·진척·인력·자재·리포팅·원가 8개 기능 영역을 Unifier BP 체계로 매핑',
          'AWP BP 세트(작업구역·작업패키지·설치작업패키지·객체 매핑·검사·진척기준) 설계',
          '작업 패키지와 3D 모델을 연결해 진척을 보여주는 폐쇄망 전용 웹 뷰어 개발 (한·영·일)',
          '진척률·공수 롤업 공식 결함을 찾아 수정하고 테스트 환경에서 처음부터 끝까지 검산',
          '시연 시나리오와 한국어·영어 시연 영상 제작',
        ],
        stack: ['Unifier uDesigner', 'REST API', 'Next.js', 'Three.js', 'glTF/IFC', 'i18n'],
      },
      {
        kind: 'consult',
        name: 'Oracle Primavera Unifier 운영·유지보수',
        client: '국내 대형 EPC사 · 반도체 공장 현장',
        period: '2026.05 – 현재',
        role: '운영지원 · 자동화 도구 개발',
        tasks: [
          '현장 출역 관리 엑셀 도구에 업체 일괄 등록·대량 업데이트 기능 통합 (현장 배포)',
          '1년치 작업일보 대량 이관 — 대용량 엑셀 스트림 파싱, REST 직접 생성, 3중 대조 검증',
          '계정·권한 처리 도구 개발 — 실패 사례를 사전 검증 규칙으로 내장, dry-run 기본, 감사 로그',
          '문서 검토 이력 전 프로젝트 전수조사 — 서버 부하를 고려한 REST 수집과 판정 로직 설계',
          '품질검사 문서번호체계 이관, 품질검사 마스터 현장 간 동기화',
          'BI Publisher 커스텀 출력물 제작, 제품 캐시 결함을 재현해 Oracle SR 제출',
          '월별 라이선스 리포트 자동화(데이터 뷰 SQL + BI Publisher + VBA)',
          '운영 요청 이력 분석으로 지연 원인 규명, 표준작업명세·운영매뉴얼 작성',
        ],
        stack: ['Unifier REST API', 'BI Publisher', 'Python', 'PowerShell', 'VBA', 'Excel COM'],
      },
      {
        kind: 'consult',
        name: '신규 업무 BP 설계 — RFI · 변경관리 · 설계변경',
        client: '국내 대형 EPC사',
        period: '2026.09 – 2026.10',
        role: 'BP 설계 · 설계 생성기 개발',
        tasks: [
          '요구정의서·절차서를 분석해 RFI, CP/CR·Change Order, 설계변경 요청서(DCR) BP 설계',
          '설정 파일에서 BP XML·구조 검사·워크플로 그림을 한 번에 만드는 BP 설계 생성기 개발',
          '요구정의서의 불일치·미정 항목을 먼저 정리하고 결정 근거를 사양서에 기록',
          '분류평가표 기반 등급 자동 판정, 공종별 복수 검토자 등 워크플로 설계',
        ],
        stack: ['Python', 'Unifier uDesigner XML', '워크플로·공식 설계'],
      },
      {
        kind: 'consult',
        name: '엔지니어링 데이터베이스(EDB) PoC',
        client: '자사 솔루션',
        period: '2026.10',
        role: 'BP 생성 · 서버 설정 · API 시험',
        tasks: [
          '배관·계기·전기·케이블·밸브 목록 등 목록형 BP 15종 일괄 생성',
          '풀다운·연동 데이터셋·데이터 피커를 REST로 구성, 기존 데이터를 건드리지 않는 방식으로 설계',
          '라인 추가·수정·삭제 API 동작을 전 BP에서 시험해 제약과 우회 방법 정리',
        ],
        stack: ['Python', 'Unifier REST API', 'Dynamic Data Set'],
      },
      {
        kind: 'consult',
        name: '설비 완성관리 BP 신규 구축',
        client: '조선·해양 대형사 (개발 환경)',
        period: '2026.08',
        role: 'BP 설계 · 시나리오 테스트',
        tasks: [
          '시스템 기준 완성관리와 분리된 설비 단위 트랙 설계, 두 트랙을 접속점 BP 하나로 연결',
          '신규 BP 5종 설계·기존 BP 4종 수정, 데이터 정의·요소 신규 구성',
          'REST로 실제 업무 순서대로 레코드를 만드는 시나리오 테스트 하네스 작성',
        ],
        stack: ['Unifier uDesigner', 'Node.js', 'REST API'],
      },
      {
        kind: 'dev',
        name: '자사 홈페이지 구축·운영',
        client: '재직사',
        period: '2026.06 – 현재',
        role: '기획 · 디자인 · 개발 · 배포 단독',
        tasks: [
          '4개 국어 기업 홈페이지 기획·디자인·개발, CI/CD와 자체 서버 배포 운영',
          '산업별 상세 페이지, 블로그, SEO/OG, 방문 분석 구성',
          '회사소개서 5개 언어판 PDF 자동 생성 파이프라인',
        ],
        stack: ['Next.js', 'CSS Modules', 'next-intl', 'CI/CD'],
      },
      {
        kind: 'dev',
        name: '회의 통번역 도구',
        client: '사내',
        period: '2026.08',
        role: '설계 · 구현 · 평가',
        tasks: [
          '음성 인식 + 기계 번역 배치 파이프라인과 실시간 모드 분리 설계',
          '정렬률·문자 오류율·번역 품질 지표를 계산하는 평가 하네스로 병목(원거리 마이크 전사) 규명',
        ],
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
        role: '공동 창업 · 서비스 기획 · 영업 · 운영',
        tasks: ['투자자문 서비스 기획, 고객 영업, 회사 운영 전반'],
        stack: [],
      },
    ],
  },
];

export const personal = [
  {
    name: 'Earth:in — 경기기후 플랫폼 서비스 개발 경진대회 최우수상',
    period: '2025.10 – 2025.12',
    role: '1인 풀스택',
    tasks: [
      '경기도 27개 시군구 환경 명소를 지도에서 탐험하는 게이미피케이션 웹 서비스',
      '3D 지구본을 버리고 지도 기반으로 전환해 모바일 성능 확보, 실시간 대기질 연동, 관리자 대시보드',
      'Nginx + Express + PostgreSQL을 Docker Compose로 묶어 AWS EC2 배포',
    ],
    stack: ['React', 'Express', 'PostgreSQL', 'Docker', 'AWS'],
    link: 'https://github.com/wookidoki/earth-in',
  },
  {
    name: '국내 주식 데이터 파이프라인 · 백테스트 엔진',
    period: '2026.10 – 현재',
    role: '1인 개발',
    tasks: [
      '10년치 국내 주식 일봉 수집, walk-forward 검증 기반 모델 학습과 백테스트',
      '매일 장 마감 후 수집 → 점수 계산 → 대시보드 게시까지 자동으로 도는 FastAPI 엔진',
      '시세 출처에 대체거래소 시간외 체결이 섞이는 문제를 발견해 정규장 종가 복원·교정',
    ],
    stack: ['Python', 'LightGBM', 'FastAPI', 'SQLite', 'Next.js'],
  },
];

export const skills = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Drizzle ORM', 'Three.js',
  'Oracle Primavera Unifier', 'uDesigner', 'REST API', 'BI Publisher', 'Python', 'pandas',
  'PowerShell', 'VBA', 'Excel COM', 'LightGBM', 'FastAPI', 'Docker', 'Nginx', 'Vercel', 'GitHub Actions',
];

export const education = [
  { name: '동국대학교 경영정보학과', detail: '학사', period: '2017.03 – 2026.12 (졸업예정)' },
  { name: 'KH정보교육원', detail: 'AWS 기반 풀스택 웹 개발자 과정 수료', period: '2025.07 – 2026.02' },
  { name: '금융투자 동아리 RICH', detail: '교육부장 · 매크로팀장 · 해외주식 팀장', period: '2018 – 2024' },
];

export const awards = [
  { name: '경기기후 플랫폼 서비스 개발 경진대회 최우수상', detail: '경기도', period: '2025.12' },
  { name: '데이터분석 준전문가 (ADsP)', detail: '한국데이터산업진흥원', period: '2025.07' },
];
