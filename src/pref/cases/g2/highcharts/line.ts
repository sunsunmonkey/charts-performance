import * as Highcharts from 'highcharts';

import { Data } from '@/pref/types';
import { size, X_FIELD, Y_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */
export default function Line(container: HTMLElement, data: Data) {
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

  //@ts-ignore
  const myChart = Highcharts.chart(container, option);

  return myChart;
}
