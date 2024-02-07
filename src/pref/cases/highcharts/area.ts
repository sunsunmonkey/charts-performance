import * as Highcharts from 'highcharts';

import { Data } from '@/pref/types';
import { size, sleep, X_FIELD, Y_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */
export default async function Area(
  container: HTMLElement,
  data: Data
): Promise<number> {
  const option = {
    title: null,
    navigation: null,
    credits: {
      enabled: false,
    },
    yAxis: {
      title: null,
    },
    chart: {
      type: 'area',
      ...size,
    },
    plotOptions: {
      area: {
        marker: {
          enabled: false,
        },
      },
    },
    xAxis: {
      categories: data.map((item) => item[X_FIELD]),
    },
    series: [
      {
        data: data.map((item) => item[Y_FIELD]),
        showInLegend: false,
      },
    ],
  };
  const startTime = performance.now();

  //@ts-ignore
  const myChart = Highcharts.chart(container, option);

  const endTime = performance.now();

  await sleep();

  myChart.destroy();

  // 返回最后的时间
  return endTime - startTime;
}
