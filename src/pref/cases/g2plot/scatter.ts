import 'https://cdnjs.cloudflare.com/ajax/libs/g2plot/2.4.31/g2plot.min.js';

import { Data } from '@/pref/types';
import { size, sleep, Y_FIELD, Z_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */
export default async function Scatter(
  container: HTMLElement,
  data: Data
): Promise<number> {
  //@ts-ignore
  // eslint-disable-next-line no-undef
  const { Scatter } = G2Plot;
  const startTime = performance.now();

  const scatter = new Scatter(container, {
    data,
    xField: Z_FIELD,
    yField: Y_FIELD,
    ...size,
  });

  scatter.render();

  const endTime = performance.now();

  await sleep();

  scatter.destroy();
  // 返回最后的时间
  return endTime - startTime;
}
