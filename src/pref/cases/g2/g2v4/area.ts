import { Chart } from 'G2v4';

import { Data } from '@/pref/types';
import { size, X_FIELD, Y_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */

export default async function Area(container: HTMLElement, data: Data) {
  const chart = new Chart({
    container,
    ...size,
  });
  chart.data(data);
  chart.area().position(`${X_FIELD}*${Y_FIELD}`); // 编码 y 通道; // 编码 y 通道;

  chart.render();
  // 返回最后的时间
  return chart;
}
