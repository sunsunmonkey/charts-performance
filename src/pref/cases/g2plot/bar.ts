import { Column as BarG2plot } from '@antv/g2plot';

import { Data } from '@/pref/types';
import { size, X_FIELD, Y_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */
export default function Bar(container: HTMLElement, data: Data) {
  const bar = new BarG2plot(container, {
    data,
    xField: X_FIELD,
    yField: Y_FIELD,
    ...size,
  });

  bar.render();

  return bar;
}
