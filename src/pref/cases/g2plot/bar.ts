import { Column as BarG2plot } from '@antv/g2plot';

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

  const bar = new BarG2plot(container, {
    data,
    xField: X_FIELD,
    yField: Y_FIELD,
    ...size,
  });

  bar.render();

  const endTime = performance.now();

  await sleep();

  bar.destroy();
  // 返回最后的时间
  return endTime - startTime;
}
