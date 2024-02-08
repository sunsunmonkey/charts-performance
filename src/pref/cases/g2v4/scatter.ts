import { Chart } from 'G2v4';

import { Data } from '@/pref/types';
import { size, Y_FIELD, Z_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */

export default async function Scatter(container: HTMLElement, data: Data) {
  const chart = new Chart({
    container,
    ...size,
  });
  chart.data(data);
  chart.point().position(`${Z_FIELD}*${Y_FIELD}`);

  chart.render();
  // 返回最后的时间
  return chart;
}
