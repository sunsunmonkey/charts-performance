import * as echarts from 'echarts';

import { Data } from '@/pref/types';
import { size, Y_FIELD, Z_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */
export default function Scatter(container: HTMLElement, data: Data) {
  const myChart = echarts.init(container, undefined, size);
  const option = {
    grid: {
      top: 10,
      right: 10,
      bottom: 24,
      left: 36,
    },
    xAxis: {},
    yAxis: {},
    series: [
      {
        data: data.map((item) => [item[Z_FIELD], item[Y_FIELD]]),
        type: 'scatter',
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  myChart.setOption(option);

  return myChart;
}
