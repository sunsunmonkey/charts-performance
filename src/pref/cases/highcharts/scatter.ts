import * as Highcharts from 'highcharts';

import { Data } from '@/pref/types';
import { size, sleep, Y_FIELD, Z_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */
export default async function Scatter(
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
      type: 'scatter',
      ...size,
    },
    series: [
      {
        data: data.map((item) => [item[Z_FIELD], item[Y_FIELD]]),
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
