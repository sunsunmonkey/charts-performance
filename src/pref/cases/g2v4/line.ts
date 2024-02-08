import { Chart } from 'G2v4';

import { Data } from '@/pref/types';
import { size, X_FIELD, Y_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */

export default async function Line(container: HTMLElement, data: Data) {
  const chart = new Chart({
    container,
    ...size,
  });
  chart.data(data);
  chart.line().position(`${X_FIELD}*${Y_FIELD}`);

  chart.render();

  return chart;
}
