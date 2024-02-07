import 'https://cdnjs.cloudflare.com/ajax/libs/g2plot/2.4.31/g2plot.min.js';

import { Data } from '@/pref/types';
import { size, sleep, X_FIELD, Y_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */
export default async function Line(
  container: HTMLElement,
  data: Data
): Promise<number> {
  //@ts-ignore
  // eslint-disable-next-line no-undef
  const { Line } = G2Plot;
  const startTime = performance.now();

  const line = new Line(container, {
    data,
    xField: X_FIELD,
    yField: Y_FIELD,
    ...size,
  });

  line.render();

  const endTime = performance.now();

  await sleep();

  line.destroy();
  // 返回最后的时间
  return endTime - startTime;
}
