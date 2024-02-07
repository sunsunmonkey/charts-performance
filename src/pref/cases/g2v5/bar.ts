import 'https://cdnjs.cloudflare.com/ajax/libs/antv-g2/5.1.0/g2.min.js';

import { Data } from '@/pref/types';
import { size, sleep, X_FIELD, Y_FIELD } from '@/pref/utils';
/**
 * @param container
 * @param data
 */
//@ts-ignore
// eslint-disable-next-line no-undef
const G2v5 = G2;
export default async function Bar(
  container: HTMLElement,
  data: Data
): Promise<number> {
  const startTime = performance.now();

  //@ts-ignore
  // eslint-disable-next-line no-undef
  const chart = new G2v5.Chart({
    container,
    ...size,
  });
  chart.data(data);
  chart
    .interval()
    .encode('x', X_FIELD) // 编码 x 通道
    .encode('y', Y_FIELD); // 编码 y 通道;

  chart.render();
  const endTime = performance.now();

  await sleep();

  chart.destroy();
  // 返回最后的时间
  return endTime - startTime;
}
