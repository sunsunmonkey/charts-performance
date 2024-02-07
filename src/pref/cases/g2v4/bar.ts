import { Chart } from 'G2v4';

import { Data } from '@/pref/types';
import { size, sleep, X_FIELD, Y_FIELD } from '@/pref/utils';
/**
 * @param container
 * @param data
 */

export default async function Bar(
  container: HTMLElement,
  data: Data
): Promise<number> {
  const startTime = performance.now();

  const chart = new Chart({
    container,
    ...size,
  });
  chart.data(data);
  chart.interval().position(`${X_FIELD}*${Y_FIELD}`); // 编码 y 通道; // 编码 y 通道;

  chart.render();
  const endTime = performance.now();

  await sleep();

  chart.destroy();
  // 返回最后的时间
  return endTime - startTime;
}
