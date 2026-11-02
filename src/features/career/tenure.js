// 경력 기간 계산.
// - 끝난 경력('YYYY-MM' ~ 'YYYY-MM'): 시작 달과 끝 달을 모두 포함해 센다(이력서 관례, 2024.04~2025.07 = 1년 4개월).
// - 진행 중인 경력: 입사일('YYYY-MM-DD')부터 오늘까지 꽉 찬 개월 수만 센다(과장 방지).
export function monthsBetween(start, end) {
  if (end) {
    const [sy, sm] = start.split('-').map(Number);
    const [ey, em] = end.split('-').map(Number);
    return (ey - sy) * 12 + (em - sm) + 1;
  }
  const [y, m, d = 1] = start.split('-').map(Number);
  const now = new Date();
  let months = (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m);
  if (now.getDate() < d) months -= 1;
  return Math.max(months, 0);
}

export function formatMonths(n) {
  const y = Math.floor(n / 12);
  const m = n % 12;
  if (!y) return `${m}개월`;
  return m ? `${y}년 ${m}개월` : `${y}년`;
}

// 'YYYY-MM' 또는 'YYYY-MM-DD' → 'YYYY.MM'
export const ym = (s) => s.slice(0, 7).replace('-', '.');
