import * as Highcharts from 'highcharts';

import { Data } from '@/pref/types';
import { size, Y_FIELD, Z_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */
export default async function Scatter(container: HTMLElement, data: Data) {
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

  //@ts-ignore
  const myChart = Highcharts.chart(container, option);

  return myChart;
}
