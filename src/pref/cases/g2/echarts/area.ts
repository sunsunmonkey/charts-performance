import * as echarts from 'echarts';

import { Data } from '@/pref/types';
import { size, X_FIELD, Y_FIELD } from '@/pref/utils';
/**
 * @param container
 * @param data
 */
export default function Area(container: HTMLElement, data: Data) {
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
        areaStyle: {},
        type: 'line',
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  myChart.setOption(option);

  return myChart;
}
