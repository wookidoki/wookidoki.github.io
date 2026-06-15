export const qnaSection = {
  ko: { title: '자기소개서', subtitle: '저에 대해 자주 받는 질문들입니다.' },
  en: { title: 'About Me', subtitle: 'Frequently asked questions about me.' },
};

export const qnaItems = [
  {
    ko: {
      question: '자기소개를 해주세요.',
      answer: `비즈니스 언어와 기술 언어를 모두 구사하는 IT 컨설턴트 이승욱입니다.

동국대학교에서 경영정보학을 전공하며 회계·재무·마케팅·소비자학 등 다양한 도메인을 공부했고, 금융투자 동아리 RICH에서 2018년부터 6년간 교육부장·매크로팀장·해외주식 팀장을 맡으며 재무제표 분석, 밸류에이션, 거시경제 흐름을 데이터로 다뤘습니다. 데이터로 의사결정하는 훈련을 실전에서 반복한 시간이었습니다.

이후 KH정보교육원 AWS 풀스택 과정을 100% 출석으로 수료하고, 현재 SI 기업 디티솔루션에서 IT 컨설턴트로 일하고 있습니다(2026년 3월 입사). EPC(설계·조달·시공) 도메인의 전자조달 플랫폼을 Next.js·TypeScript·PostgreSQL로 개발하는 동시에, Oracle Primavera Unifier 운영과 컨설팅을 함께 수행합니다.

저는 한 단계만 담당하는 개발자가 아닙니다. 고객과의 상담과 요구사항 정의에서 출발해, 시스템 설계와 개발, 운영 환경 배포, 그리고 배포 이후의 운영 지원(VOC 대응)까지 — 프로젝트의 전 사이클을 직접 경험하는 일을 좋아합니다. 데이터 분석도 마찬가지로, 데이터 수집과 전처리부터 검증, 의사결정에 쓰이는 인사이트 도출까지 끝까지 책임지고 마무리합니다.

비즈니스의 본질을 경영학적으로 이해하고, 그것을 시스템으로 구현하며, 데이터로 의사결정의 근거를 만드는 것. 이 전 과정을 한 사람 안에서 연결할 수 있다는 점이 저의 가장 큰 강점입니다.`,
    },
    en: {
      question: 'Please introduce yourself.',
      answer: `I'm Seungwook Lee, an IT consultant fluent in both the language of business and the language of technology.

I majored in Management Information Systems at Dongguk University, studying accounting, finance, marketing, and consumer studies, and served for 6 years (since 2018) in the finance investment club RICH as Education Director, Macro Analysis Team Lead, and International Stocks Team Lead — repeatedly practicing data-driven decision making through real financial statement analysis, valuation, and macroeconomic trends.

I then completed the AWS Full-Stack course at KH Information Education Institute with 100% attendance, and currently work as an IT consultant at the SI firm DT Solution (joined March 2026). I develop an e-procurement platform in the EPC (Engineering, Procurement, Construction) domain with Next.js, TypeScript, and PostgreSQL, while also handling Oracle Primavera Unifier operations and consulting.

I'm not a developer who owns just one stage. I love experiencing the full project cycle myself — starting from client consultation and requirement definition, through system design and development, production deployment, and post-deployment operational support (handling customer VOCs). Data analysis is the same: I take ownership from data collection and preprocessing through validation all the way to the insights that drive decisions.

Understanding business through management thinking, implementing it as systems, and grounding decisions in data — being able to connect this entire process within one person is my greatest strength.`,
    },
  },
  {
    ko: {
      question: '개발자에서 IT 컨설턴트로, 어떤 길을 걸어오셨나요?',
      answer: `경영학을 전공하고 금융투자 동아리에서 6년간 데이터를 분석하며, 저는 데이터가 의사결정을 바꾸는 힘을 체득했습니다. 하지만 아무리 정교한 분석도 PowerPoint 보고서에 갇히면 죽은 데이터라는 한계를 느꼈습니다. 데이터가 시스템 안에서 살아 움직이게 만들고 싶어 개발을 시작했습니다.

직접 서비스를 만들고 배포하면서, 제가 가장 잘하는 일은 '코드를 짜는 것' 자체가 아니라 '왜 이 기능이 필요한가'를 비즈니스 관점에서 먼저 정의하고, 그것을 끝까지 책임지고 굴러가게 만드는 일이라는 것을 알게 됐습니다. 현재 회사에서 Oracle Unifier 운영을 맡으며 이 방향은 더 분명해졌습니다. 고객과의 상담으로 요구사항을 끌어내 BP(비즈니스 프로세스)를 설계하고, 데이터 구조와 연동 방식을 제안하고, 개발과 운영 배포를 거쳐 배포 이후의 운영 지원과 VOC 대응까지 — 한 사이클을 처음부터 끝까지 책임지는 과정이 바로 컨설팅이었습니다.

그래서 저는 '시키는 대로 한 단계만 만드는 개발자'를 넘어, '고객과 상담하고, 데이터로 더 나은 프로세스를 제안하고, 구현과 운영까지 끝까지 함께하는 컨설턴트'를 지향합니다. 기술을 아는 컨설턴트는 구현 가능성을 알기에 헛된 제안을 하지 않고, 비즈니스를 아는 개발자는 요구사항 뒤의 진짜 목적을 읽습니다. 그 두 역할을 한 몸에 갖추고 프로젝트의 전 과정을 꿰는 것이 제 커리어의 방향입니다.`,
    },
    en: {
      question: 'How did you move from developer toward IT consultant?',
      answer: `Studying business and analyzing data for 6 years in a finance investment club, I internalized how data changes decisions. But I hit a wall: no matter how sophisticated, analysis trapped in a PowerPoint deck is dead data. I started coding to make data come alive inside systems.

Building and deploying services myself, I realized my real strength isn't writing code — it's defining "why this feature matters" from a business perspective first, then owning it end to end until it actually runs. Handling Oracle Unifier operations at my current company made this clearer. Drawing out requirements through client consultation, designing the BP (business process), proposing data structures and integration methods, then carrying it through development, production deployment, and post-deployment operational support and VOC handling — owning one full cycle from start to finish — that was consulting.

So I aim to go beyond a developer who builds a single stage on command, toward a consultant who consults with clients, proposes better processes through data, and stays through implementation and operations to the end. A consultant who knows technology won't make impractical proposals because he understands feasibility; a developer who knows business reads the real purpose behind requirements. Combining both roles in one person — and threading the entire project lifecycle — is the direction of my career.`,
    },
  },
  {
    ko: {
      question: '본인의 강점과 약점을 알려주세요.',
      answer: `[강점: 매몰 비용에 매이지 않는 결단력]

저는 공들인 결과물이라도 데이터가 다른 방향을 가리키면 즉시 폐기하고 새 길을 찾는 데 주저하지 않습니다.

Steam 리뷰 분석 프로젝트가 대표적입니다. "추천했지만 부정 리뷰를 남긴 유저"가 핵심 피드백을 줄 것이라 확신하고, 4만 건의 데이터로 4-Cluster 모델을 며칠 밤새워 구축했습니다. 그러나 검증 과정에서 그 유저군 대부분이 밈·풍자성 리뷰라는 사실을 발견했고, 즉시 전체 모델을 폐기하고 "패치 유형별 감성 변화 측정"으로 방향을 틀었습니다. 데이터 수집부터 BERT 감성 분류, 통계 검정, 결과 도출까지 직접 끝까지 끌고 가 "버그 수정 패치는 긍정률을 높이지만, 대형 업데이트는 오히려 유저 피로로 긍정률을 낮춘다"는 통계적으로 유의한(p=0.0065) 인사이트를 도출했습니다. 빠르게 실패를 인정한 덕분에 얻은 성과입니다.

이 성향은 실무에서도 이어집니다. 회사에서 개인정보 암호화 시스템을 설계할 때, 서비스 코드 22개 파일을 일일이 고치는 방식과 데이터 계층(ORM)에서 암호화를 격리하는 방식을 비교한 뒤 후자를 택해, 서비스 레이어 수정 0건·기능 회귀 0건으로 운영 배포까지 직접 수행했습니다.

[약점: 결과 지향적 조급함, 그리고 보완]

가시적 성과를 빠르게 내려는 성향이 강해, 때로는 긴 호흡으로 파야 할 기술적 깊이를 건너뛰려 할 때가 있습니다.

이를 보완하기 위해 '중간 검증'을 제 워크플로우에 의무화했습니다. 빠르게 가고 싶을수록 오히려 단위 테스트와 샘플 검수를 먼저 하도록 스스로 강제합니다. 실제로 데이터 분석에서 단일 검증셋을 재사용해 성능이 부풀려진 것을 발견한 뒤로는, 잠긴 holdout과 부트스트랩 신뢰구간으로 노이즈 위의 변화만 결과로 채택합니다. 속도라는 장점에 검증이라는 안전장치를 다는 것 — 그것이 빠르면서도 정확한 결과를 내기 위한 제 방식입니다.`,
    },
    en: {
      question: 'What are your strengths and weaknesses?',
      answer: `[Strength: Decisiveness without sunk-cost bias]

I don't hesitate to scrap my own work and find a new path when data points elsewhere, no matter how much effort I've invested.

My Steam Review Analysis is a clear example. Certain that "users who recommended but left negative reviews" held key feedback, I built a 4-Cluster model on 40,000+ data points over several sleepless days. But validation revealed most of them were satirical/meme reviews. I immediately scrapped the entire model and pivoted to "measuring sentiment change by patch type." Carrying it end to end myself — from data collection through BERT sentiment classification, statistical testing, and final results — I derived a statistically significant insight (p=0.0065): bug-fix patches raise positive rates, while major updates lower them through user fatigue. The result came precisely because I admitted failure quickly.

This carries into my work. Designing a PII encryption system at my company, I compared editing 22 service files individually against isolating encryption in the data layer (ORM), chose the latter, and carried it through to production deployment with zero service-layer changes and zero functional regression.

[Weakness: Results-oriented impatience, and how I manage it]

My strong drive for visible results sometimes tempts me to skip technical depth that requires patient exploration.

To compensate, I made "intermediate validation" mandatory in my workflow. The more I want speed, the more I force myself to write unit tests and inspect samples first. After discovering that reusing a single validation set had inflated my analysis metrics, I now accept only changes above the noise floor, using a locked holdout and bootstrap confidence intervals. Adding verification safeguards to my speed — that's how I deliver results that are both fast and accurate.`,
    },
  },
  {
    ko: {
      question: '가장 어려웠던 업무 경험을 알려주세요.',
      answer: `입사 첫 달, EPC 도메인 전자조달 플랫폼의 개인정보 보호 과제를 맡았습니다. 30여 개 테이블에 걸쳐 약 100개 컬럼의 개인정보가 평문으로 저장되어 있었고, 이를 암호화 솔루션으로 전환해야 했습니다.

제약이 까다로웠습니다. 첫째, 암호화 후에도 WHERE 검색이 동작해야 해서 결정론적(deterministic) 암호화가 필요했습니다. 둘째, 암호화 모듈이 네이티브 바이너리라 환경 구성이 까다로웠습니다. 셋째, 외부망과 단절된 폐쇄망에 무중단으로 배포해야 했습니다.

가장 어려웠던 것은 "어떻게 적용할 것인가"였습니다. 서비스 코드 22개 파일에 일일이 암호화 헬퍼를 호출하면 누락 위험이 크고 유지보수가 무너집니다. 저는 ORM의 커스텀 타입 기능으로 암호화를 데이터 계층에 격리하는 방식을 설계해, 서비스 코드를 한 줄도 고치지 않고 멱등성(중복 암호화 방지)까지 내장했습니다.

환경 충돌로 다섯 번 막혔지만, 그때마다 무엇이 문제이고 어떻게 풀었는지를 작업일지에 기록하며 자급자족형 스키마 구성으로 해결했습니다. 암호문 식별 규칙도 문서에 의존하지 않고 직접 왕복(round-trip) 테스트로 검증해 찾아냈습니다.

설계와 구현에서 끝내지 않고, 폐쇄망 배포 절차와 배포 이후의 데이터 정합성 점검까지 직접 챙겨 서비스 레이어 수정 0건, 기능 회귀 0건으로 운영 배포를 완료했습니다. 정답이 정해지지 않은 문제를 제약 단위로 분해하고, 매 단계를 검증으로 증명하며 끝까지 책임지고 풀어낸 경험입니다.`,
    },
    en: {
      question: 'Tell me about your most challenging work experience.',
      answer: `In my first month, I took on the personal-data protection task for an e-procurement platform in the EPC domain. Across 30+ tables, roughly 100 columns stored personal information in plaintext, and it all had to be migrated to an encryption solution.

The constraints were demanding. First, WHERE searches had to keep working after encryption, requiring deterministic encryption. Second, the encryption module was a native binary, making environment setup tricky. Third, it had to be deployed with zero downtime onto a closed network isolated from the internet.

The hardest part was "how to apply it." Calling an encryption helper across 22 service files individually risks omissions and breaks maintainability. I designed an approach that isolates encryption in the data layer via the ORM's custom-type feature — touching not a single line of service code, with idempotency (no double-encryption) built in.

Environment conflicts blocked me five times, but each time I logged the problem and the fix in my work journal and resolved it with a self-contained schema setup. I even verified the ciphertext-identification rule myself through round-trip testing rather than relying on documentation.

I didn't stop at design and implementation — I owned the closed-network deployment procedure and the post-deployment data-integrity checks as well, completing production deployment with zero service-layer changes and zero functional regression. It was an experience of decomposing an open-ended problem into constraints, proving each step through verification, and owning it to the very end.`,
    },
  },
  {
    ko: {
      question: '개인의 이익과 프로젝트의 이익이 충돌한 경험이 있나요?',
      answer: `경기도 기후 데이터를 활용한 공공 서비스 웹앱을 1인 개발할 때의 경험입니다.

당시 저는 취업을 준비하는 입장에서, 포트폴리오에 기술적으로 인상적인 결과물을 남기고 싶다는 욕심이 컸습니다. 그래서 Three.js를 도입해 기후 변화를 3D 지구본으로 시각화하는 기능을 구현하기 시작했습니다. 개인적으로도 3D 그래픽스에 관심이 있었고, "이런 기술도 다룬다"를 보여주기 좋은 기능이었습니다.

하지만 개발 중간 점검에서 치명적인 문제를 발견했습니다. 3D 렌더링이 로딩 속도를 현저히 떨어뜨리고, 사양이 낮은 모바일에서는 구동 자체가 불가능했습니다. 화려한 기술 시연을 위해 서비스의 접근성을 희생하는 셈이었습니다.

선택해야 했습니다. 무리해서라도 3D를 유지해 포트폴리오를 화려하게 만들 것인가, 기능을 축소하더라도 누구나 빠르게 접근하는 공공 서비스의 본질을 지킬 것인가.

저는 며칠간 공들인 3D 코드를 전면 폐기하고, 직관적인 2D 차트와 Google Maps 기반 시각화로 전환했습니다. 확보된 리소스를 API 데이터 정합성 검증과 UI/UX 개선에 집중 투자했고, 그 결과 "직관적이고 누구나 쓰기 편하다"는 평가로 경기기후 플랫폼 경진대회에서 최우수상을 수상했습니다.

개인의 욕심을 내려놓고 서비스를 쓰는 사람의 입장에 집중한 결단이, 결과적으로 더 큰 성과로 돌아온 경험입니다.`,
    },
    en: {
      question: 'Have you experienced a conflict between personal and project interests?',
      answer: `This happened while solo-developing a public-service web app using Gyeonggi-do climate data.

As a job seeker, I badly wanted a technically impressive portfolio piece. So I started implementing Three.js to visualize climate change as an interactive 3D globe — a personal interest and a great showcase of technical range.

But a mid-development review revealed a critical issue: 3D rendering severely degraded loading speed and was completely unusable on low-spec mobile devices. I was sacrificing service accessibility for a flashy demo.

I had to choose: force-keep the 3D feature for a visually impressive portfolio, or reduce scope to protect the core promise of a fast, accessible public service.

I scrapped days of 3D code entirely and switched to intuitive 2D charts and Google Maps-based visualization. I redirected the freed resources into API data validation and UI/UX improvements — and the result, praised as "intuitive and easy for anyone," won the Grand Prize at the Gyeonggi Climate Platform Competition.

Letting go of personal ambition to focus on the people actually using the service ultimately returned a greater achievement.`,
    },
  },
];
