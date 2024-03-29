import { Chart } from 'G2v5';

import { Data } from '@/pref/types';
import { size, X_FIELD, Y_FIELD } from '@/pref/utils';
/**
 * @param container
 * @param data
 */

export default async function Bar(container: HTMLElement, data: Data) {
  const chart = new Chart({
    container,
    ...size,
  });
  chart.data(data);
  chart
    .interval()
    .encode('x', X_FIELD) // 编码 x 通道
    .encode('y', Y_FIELD); // 编码 y 通道;

  await chart.render();

  return chart;
}
