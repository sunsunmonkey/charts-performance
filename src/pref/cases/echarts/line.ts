import 'https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.3/echarts.min.js';

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
  const startTime = performance.now();
  //@ts-ignore
  // eslint-disable-next-line no-undef
  const myChart = echarts.init(container, undefined, size);
  const option = {
    grid: {
      top: 10,
      right: 10,
      bottom: 24,
      left: 36,
    },
    xAxis: {
      data: data.map((item) => item[X_FIELD]),
    },
    yAxis: {},
    series: [
      {
        data: data.map((item) => item[Y_FIELD]),
        type: 'line',
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  myChart.setOption(option);

  const endTime = performance.now();

  await sleep();

  myChart.dispose();

  // 返回最后的时间
  return endTime - startTime;
}
