import { Line as LineG2plot } from '@antv/g2plot';

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
  const startTime = performance.now();

  const line = new LineG2plot(container, {
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
