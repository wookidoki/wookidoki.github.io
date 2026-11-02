// 경력기술서 기본 정보. 수치 출처: me/13-포트폴리오_수치정리_2026-09-08_대외본.md (고객사 마스킹 표기 유지)

export const person = {
  name: '이승욱',
  nameEn: 'Seungwook Lee',
  email: 'wookidoki98@gmail.com',
  github: 'https://github.com/wookidoki',
  photo: '/profile.jpg',
};

// 트랙별 머리말·요약·핵심 수치
export const tracks = {
  dev: {
    label: '개발',
    role: '풀스택 개발자 · 데이터 자동화',
    summary: [
      'Next.js·TypeScript·PostgreSQL로 B2B 전자조달 플랫폼을 개발했습니다. 운영 중인 시스템의 개인정보 약 100개 컬럼을 서비스 코드 수정 없이 암호화로 전환했고, 6인 이상 팀 저장소에서 커밋 230건으로 기여 4위를 기록했습니다.',
      'Python·PowerShell로 대용량 엑셀 이관 파이프라인, 서버 부하를 고려한 REST 수집기, 계정·권한 자동화 도구를 만들었습니다. 결과는 원본과 전수 대조로 확인합니다.',
    ],
    metrics: [
      { value: 0, suffix: '건', label: '암호화 전환 중 서비스 코드 수정', note: 'ORM 타입 레이어로 격리' },
      { value: 230, suffix: '커밋', label: '팀 저장소 기여 4위', note: '+22,774 / −8,657 라인' },
      { value: 34, suffix: '본', label: '직접 만든 운영 자동화 스크립트', note: '레지스트리로 관리' },
      { value: 236, suffix: '커밋', label: '자사 홈페이지 단독 구축', note: '4개 국어 · 운영 중' },
    ],
  },
  consult: {
    label: '컨설팅',
    role: 'Oracle Primavera Unifier 구현·운영',
    summary: [
      '대형 EPC사의 Oracle Primavera Unifier 운영지원과 조선·해양 대형사 대상 신규 구축 제안을 함께 맡고 있습니다. 요청이 들어오면 REST API로 원본 데이터를 직접 뽑아 원인을 확인하고, 반복되는 일은 검증 규칙을 넣은 도구로 바꿉니다.',
      'AWP 기반 통합 건설관리시스템 제안에서 BP 설계, 폐쇄망 3D 진척 웹앱, 데이터 검증, 시연 영상까지 직접 만들었습니다. 그 전에는 투자자문사를 공동 창업해 운영했습니다.',
    ],
    metrics: [
      { value: 10, suffix: '본', label: 'AWP BP XML 직접 설계', note: '7개 계열 · v30→v32 개선' },
      { value: 65, suffix: '건', label: '신규 BP 시나리오 테스트 통과', note: '실패 4→0, 결함 9건 식별' },
      { value: 10, suffix: '종', label: 'BP 설계 규약 문서', note: '패턴 카탈로그 7종 별도' },
      { value: 34, suffix: '본', label: '운영 자동화 스크립트', note: 'REST 수집·이관·검증' },
    ],
  },
};

export const careers = [
  {
    company: '디티솔루션 (DT Solution)',
    type: 'EPC 도메인 SI',
    role: 'IT 컨설턴트 · 개발 (정규직)',
    start: '2026-03-30',
    end: null,
    lines: [
      '조선·해양 대형사 B2B 전자조달 플랫폼 풀스택 개발 (2026.04~06)',
      '국내 대형 EPC사 Oracle Primavera Unifier 운영지원 (2026.05~)',
      '조선·해양 대형사 AWP 통합 건설관리시스템 제안·BP 설계 (2026.06~)',
      '신규 업무 BP 설계·BP 생성기·현장 업무 도구 개발 (2026.09~)',
      '자사 홈페이지 단독 구축·운영 (2026.06~)',
    ],
  },
  {
    company: '탑프로홀딩스',
    type: '투자자문업',
    role: '공동 창업',
    start: '2024-04',
    end: '2025-07',
    lines: ['투자자문 서비스 기획, 영업, 운영'],
  },
];

export const education = [
  { school: '동국대학교', detail: '경영정보학과', period: '2017.03 – 2026.12 (졸업예정)' },
  { school: '금융투자 동아리 RICH', detail: '교육부장 · 매크로팀장 · 해외주식 팀장 — 재무제표 분석, 밸류에이션, 거시경제', period: '2018 – 2024' },
  { school: 'KH정보교육원', detail: 'AWS 기반 풀스택 웹 개발자 과정 수료 (출석 100%)', period: '2025.07 – 2026.02' },
];

export const awards = [
  { name: '경기기후 플랫폼 서비스 개발 경진대회 최우수상', org: '경기도 기후환경정책과', period: '2025.12' },
  { name: '데이터분석 준전문가 (ADsP)', org: '한국데이터산업진흥원', period: '2025.07' },
];

export const skills = [
  { group: '언어', items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'PowerShell', 'VBA'] },
  { group: '웹', items: ['Next.js (App Router)', 'React', 'Node.js', 'Drizzle ORM', 'PostgreSQL', 'Three.js'] },
  { group: 'Unifier', items: ['uDesigner BP 설계', 'REST API', 'BI Publisher', '데이터 뷰', 'Excel COM 자동화'] },
  { group: '데이터', items: ['pandas', 'LightGBM', 'walk-forward 검증', '텍스트 분류', '평가 하네스 설계'] },
  { group: '운영', items: ['폐쇄망 3단계 배포', 'PM2 · Nginx', 'Vercel', 'GitHub Actions', '감사 로그 설계'] },
];
