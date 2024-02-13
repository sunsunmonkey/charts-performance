import { Line as LineG2plot } from '@antv/g2plot';

import { Data } from '@/pref/types';
import { size, X_FIELD, Y_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */
export default function Line(container: HTMLElement, data: Data) {
  const line = new LineG2plot(container, {
    data,
    xField: X_FIELD,
    yField: Y_FIELD,
    ...size,
  });

  line.render();

  return line;
}
