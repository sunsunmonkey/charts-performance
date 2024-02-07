/* eslint-disable simple-import-sort/imports */
import 'https://cdnjs.cloudflare.com/ajax/libs/highcharts/11.3.0/highcharts.js';

import { Data } from '@/pref/types';
import { size, sleep, X_FIELD, Y_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */
export default async function Line(
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
    xAxis: {
      categories: data.map((item) => item[X_FIELD]),
    },
    chart: size,
    series: [
      {
        data: data.map((item) => item[Y_FIELD]),
        showInLegend: false,
      },
    ],
  };
  const startTime = performance.now();
  //@ts-ignore
  // eslint-disable-next-line no-undef
  const myChart = Highcharts.chart(container, option);

  const endTime = performance.now();

  await sleep();

  myChart.destroy();

  // 返回最后的时间
  return endTime - startTime;
}
