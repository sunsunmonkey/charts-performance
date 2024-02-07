import 'https://cdnjs.cloudflare.com/ajax/libs/g2plot/2.4.31/g2plot.min.js';

import { Data } from '@/pref/types';
import { size, sleep, X_FIELD, Y_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */
export default async function Area(
  container: HTMLElement,
  data: Data
): Promise<number> {
  //@ts-ignore
  // eslint-disable-next-line no-undef
  const { Area } = G2Plot;
  const startTime = performance.now();

  const area = new Area(container, {
    data,
    xField: X_FIELD,
    yField: Y_FIELD,
    ...size,
  });

  area.render();
  const endTime = performance.now();

  await sleep();

  area.destroy();
  // 返回最后的时间
  return endTime - startTime;
}
