import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import styles from './ProjectDetail.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const COLORS = ['#2563eb', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#ec4899'];

const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 12 }, padding: 16 } },
  },
  scales: {
    y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
    x: { grid: { display: false } },
  },
};

export default function ProjectCharts({ chartData, lang }) {
  const charts = [];

  // Steam Review: 긍정률 변화 Bar
  if (chartData.positiveRate) {
    const d = chartData.positiveRate;
    charts.push(
      <div key="positiveRate" className={styles.chartWrap}>
        <h3 className={styles.chartTitle}>{lang === 'ko' ? d.label : d.labelEn}</h3>
        <div className={styles.chartBox}>
          <Bar
            data={{
              labels: lang === 'ko' ? d.labels : d.labelsEn,
              datasets: [{
                label: lang === 'ko' ? d.label : d.labelEn,
                data: d.data,
                backgroundColor: d.data.map((v) => v > 0 ? '#10b981' : v === 0 ? '#f59e0b' : '#ef4444'),
                borderRadius: 6,
              }],
            }}
            options={{ ...commonOptions, plugins: { ...commonOptions.plugins, legend: { display: false } } }}
          />
        </div>
      </div>,
    );
  }

  // Steam Review: 리뷰 분포 Doughnut
  if (chartData.sentimentDist) {
    const d = chartData.sentimentDist;
    charts.push(
      <div key="sentimentDist" className={styles.chartWrap}>
        <h3 className={styles.chartTitle}>{lang === 'ko' ? d.label : d.labelEn}</h3>
        <div className={styles.chartBoxSmall}>
          <Doughnut
            data={{
              labels: lang === 'ko' ? d.labels : d.labelsEn,
              datasets: [{ data: d.data, backgroundColor: COLORS.slice(0, d.data.length) }],
            }}
            options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 12 }, padding: 12 } } } }}
          />
        </div>
      </div>,
    );
  }

  // 통계 검정 결과 (p-value) Bar
  if (chartData.statTest) {
    const d = chartData.statTest;
    charts.push(
      <div key="statTest" className={styles.chartWrap}>
        <h3 className={styles.chartTitle}>{d.label[lang]}</h3>
        <div className={styles.chartBox}>
          <Bar
            data={{
              labels: d.labels[lang],
              datasets: [{
                label: d.label[lang],
                data: d.data,
                backgroundColor: d.data.map((v) => v < 0.05 ? '#10b981' : '#ef4444'),
                borderRadius: 6,
              }],
            }}
            options={{
              ...commonOptions,
              plugins: {
                ...commonOptions.plugins,
                legend: { display: false },
                tooltip: {
                  callbacks: {
                    label: (ctx) => {
                      const sig = lang === 'ko' ? (ctx.raw < 0.05 ? ' (유의)' : ' (비유의)') : (ctx.raw < 0.05 ? ' (significant)' : ' (not significant)');
                      return `p = ${ctx.raw}${sig}`;
                    },
                  },
                },
              },
              scales: {
                y: { ...commonOptions.scales.y, max: 0.06, ticks: { callback: (v) => v.toFixed(3) } },
                x: { ...commonOptions.scales.x, ticks: { font: { size: 11 } } },
              },
            }}
          />
        </div>
        <p className={styles.chartNote}>
          {lang === 'ko' ? '※ 초록: p < 0.05 (통계적 유의)' : '※ Green: p < 0.05 (Statistically significant)'}
        </p>
      </div>,
    );
  }

  // AI Ethics: 토픽 트렌드 Line
  if (chartData.topicTrend) {
    const d = chartData.topicTrend;
    charts.push(
      <div key="topicTrend" className={styles.chartWrap}>
        <h3 className={styles.chartTitle}>
          {lang === 'ko' ? '연도별 토픽 비중 변화 (%)' : 'Yearly Topic Distribution (%)'}
        </h3>
        <div className={styles.chartBox}>
          <Line
            data={{
              labels: d.labels,
              datasets: d.datasets.map((ds, i) => ({
                label: ds.label[lang],
                data: ds.data,
                borderColor: COLORS[i],
                backgroundColor: COLORS[i] + '20',
                tension: 0.3,
                fill: false,
                pointRadius: 4,
              })),
            }}
            options={commonOptions}
          />
        </div>
      </div>,
    );
  }

  // AI Ethics: 2024 토픽 분포 Doughnut
  if (chartData.topicDist2024) {
    const d = chartData.topicDist2024;
    charts.push(
      <div key="topicDist2024" className={styles.chartWrap}>
        <h3 className={styles.chartTitle}>
          {lang === 'ko' ? '2024년 토픽 분포' : '2024 Topic Distribution'}
        </h3>
        <div className={styles.chartBoxSmall}>
          <Doughnut
            data={{
              labels: d.labels[lang],
              datasets: [{ data: d.data, backgroundColor: COLORS.slice(0, d.data.length) }],
            }}
            options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 12 }, padding: 12 } } } }}
          />
        </div>
      </div>,
    );
  }

  // Image Analysis: 정확도 Bar
  if (chartData.accuracy) {
    const d = chartData.accuracy;
    charts.push(
      <div key="accuracy" className={styles.chartWrap}>
        <h3 className={styles.chartTitle}>{lang === 'ko' ? d.label : d.labelEn}</h3>
        <div className={styles.chartBox}>
          <Bar
            data={{
              labels: lang === 'ko' ? d.labels : d.labelsEn,
              datasets: [{
                label: lang === 'ko' ? d.label : d.labelEn,
                data: d.data,
                backgroundColor: '#2563eb',
                borderRadius: 6,
              }],
            }}
            options={{ ...commonOptions, plugins: { ...commonOptions.plugins, legend: { display: false } } }}
          />
        </div>
      </div>,
    );
  }

  // 회귀계수 Bar (with p-value tooltip)
  if (chartData.regression) {
    const d = chartData.regression;
    charts.push(
      <div key="regression" className={styles.chartWrap}>
        <h3 className={styles.chartTitle}>{d.label[lang]}</h3>
        <div className={styles.chartBox}>
          <Bar
            data={{
              labels: d.labels[lang],
              datasets: [{
                label: d.label[lang],
                data: d.data,
                backgroundColor: COLORS.slice(0, d.data.length),
                borderRadius: 6,
              }],
            }}
            options={{
              ...commonOptions,
              plugins: {
                ...commonOptions.plugins,
                legend: { display: false },
                tooltip: {
                  callbacks: {
                    label: (ctx) => {
                      const pVal = d.pValues ? d.pValues[ctx.dataIndex] : null;
                      const base = `\u03B2 = ${ctx.raw}`;
                      return pVal != null ? `${base} (p = ${pVal})` : base;
                    },
                  },
                },
              },
            }}
          />
        </div>
        {d.pValues && (
          <p className={styles.chartNote}>
            {lang === 'ko' ? '※ 모든 변인 p < 0.05 (통계적 유의)' : '※ All variables p < 0.05 (Statistically significant)'}
          </p>
        )}
      </div>,
    );
  }

  // 모델 적합도 (stat cards)
  if (chartData.modelFit) {
    const d = chartData.modelFit;
    charts.push(
      <div key="modelFit" className={styles.chartWrap}>
        <h3 className={styles.chartTitle}>{d.label[lang]}</h3>
        <div className={styles.statCards}>
          {d.labels[lang].map((label, i) => (
            <div key={label} className={styles.statCard}>
              <span className={styles.statValue}>
                {d.data[i] < 1 ? d.data[i].toFixed(2) : d.data[i].toFixed(1)}
              </span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
          <div className={styles.statCard}>
            <span className={`${styles.statValue} ${styles.significant}`}>p &lt; 0.001</span>
            <span className={styles.statLabel}>F-test</span>
          </div>
        </div>
      </div>,
    );
  }

  // 유사도 비교 Bar (horizontal)
  if (chartData.similarity) {
    const d = chartData.similarity;
    const barColors = d.data.length <= 2
      ? ['#ef4444', '#10b981']
      : d.data.map((v, i, arr) => {
          if (i === 0) return '#ef4444';
          if (i === arr.length - 1) return '#10b981';
          return '#f59e0b';
        });
    charts.push(
      <div key="similarity" className={styles.chartWrap}>
        <h3 className={styles.chartTitle}>{d.label[lang]}</h3>
        <div className={styles.chartBox}>
          <Bar
            data={{
              labels: d.labels[lang],
              datasets: [{
                label: d.label[lang],
                data: d.data,
                backgroundColor: barColors,
                borderRadius: 6,
              }],
            }}
            options={{
              ...commonOptions,
              indexAxis: 'y',
              plugins: { ...commonOptions.plugins, legend: { display: false } },
              scales: {
                x: { beginAtZero: true, max: 100, grid: { color: '#f1f5f9' } },
                y: { grid: { display: false } },
              },
            }}
          />
        </div>
      </div>,
    );
  }

  // SDG별 연계 강도 Horizontal Bar
  if (chartData.sdgHeatmap) {
    const d = chartData.sdgHeatmap;
    charts.push(
      <div key="sdgHeatmap" className={styles.chartWrap}>
        <h3 className={styles.chartTitle}>{d.label[lang]}</h3>
        <div className={styles.chartBox}>
          <Bar
            data={{
              labels: d.labels[lang],
              datasets: [{
                label: d.label[lang],
                data: d.data,
                backgroundColor: d.data.map((v) => {
                  if (v >= 0.7) return '#10b981';
                  if (v >= 0.5) return '#f59e0b';
                  return '#ef4444';
                }),
                borderRadius: 6,
              }],
            }}
            options={{
              ...commonOptions,
              indexAxis: 'y',
              plugins: { ...commonOptions.plugins, legend: { display: false } },
              scales: {
                x: { min: 0, max: 1, grid: { color: '#f1f5f9' }, ticks: { callback: (v) => v.toFixed(1) } },
                y: { grid: { display: false }, ticks: { font: { size: 11 } } },
              },
            }}
          />
        </div>
        <p className={styles.chartNote}>
          {lang === 'ko'
            ? '※ 초록: \u22650.7 높음 | 노랑: \u22650.5 중간 | 빨강: <0.5 낮음'
            : '※ Green: \u22650.7 High | Yellow: \u22650.5 Medium | Red: <0.5 Low'}
        </p>
      </div>,
    );
  }

  // 모델 비교 (SMAPE) Bar
  if (chartData.modelComparison) {
    const d = chartData.modelComparison;
    charts.push(
      <div key="modelComparison" className={styles.chartWrap}>
        <h3 className={styles.chartTitle}>{lang === 'ko' ? d.label : d.labelEn}</h3>
        <div className={styles.chartBox}>
          <Bar
            data={{
              labels: lang === 'ko' ? d.labels : d.labelsEn,
              datasets: [{
                label: lang === 'ko' ? d.label : d.labelEn,
                data: d.data,
                backgroundColor: d.data.map((_, i) => i === d.data.length - 1 ? '#10b981' : '#2563eb'),
                borderRadius: 6,
              }],
            }}
            options={{
              ...commonOptions,
              plugins: { ...commonOptions.plugins, legend: { display: false } },
            }}
          />
        </div>
        <p className={styles.chartNote}>
          {lang === 'ko' ? '※ SMAPE: 낮을수록 좋음 (초록: 최종 모델)' : '※ SMAPE: Lower is better (Green: Final model)'}
        </p>
      </div>,
    );
  }

  // 모달 비교 (Precision@10) Bar
  if (chartData.modalComparison) {
    const d = chartData.modalComparison;
    charts.push(
      <div key="modalComparison" className={styles.chartWrap}>
        <h3 className={styles.chartTitle}>{d.label[lang]}</h3>
        <div className={styles.chartBox}>
          <Bar
            data={{
              labels: d.labels[lang],
              datasets: [{
                label: d.label[lang],
                data: d.data,
                backgroundColor: d.data.map((_, i) => i === d.data.length - 1 ? '#10b981' : '#2563eb'),
                borderRadius: 6,
              }],
            }}
            options={{
              ...commonOptions,
              plugins: { ...commonOptions.plugins, legend: { display: false } },
              scales: {
                y: {
                  ...commonOptions.scales.y,
                  max: 1,
                  ticks: { callback: (v) => (v * 100).toFixed(0) + '%' },
                },
                x: commonOptions.scales.x,
              },
            }}
          />
        </div>
        <p className={styles.chartNote}>
          {lang === 'ko' ? '※ 초록: 멀티모달 (최종 모델)' : '※ Green: Multimodal (Final model)'}
        </p>
      </div>,
    );
  }

  return <div className={styles.chartsGrid}>{charts}</div>;
}
