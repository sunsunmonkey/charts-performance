// 默认提供的 引擎
export const ENGINES: EnginesType[] = [
  'G2v5',
  'G2v4',
  'G2Plot',
  'ECharts',
  'Highcharts',
];
// 默认提供的 图表
export const CHART_TYPES: ChartType[] = ['Line', 'Area', 'Bar', 'Scatter'];

export type ChartType = 'Line' | 'Area' | 'Bar' | 'Scatter';
export type EnginesType = 'G2v5' | 'G2v4' | 'G2Plot' | 'ECharts' | 'Highcharts';
