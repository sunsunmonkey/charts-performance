import * as Highcharts from 'highcharts';

import { Data } from '@/pref/types';
import { size, X_FIELD, Y_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */
export default function Area(container: HTMLElement, data: Data) {
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

  //@ts-ignore
  const myChart = Highcharts.chart(container, option);

  return myChart;
}
