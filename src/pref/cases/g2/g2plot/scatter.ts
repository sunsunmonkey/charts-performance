import { Scatter as ScatterG2plot } from '@antv/g2plot';

import { Data } from '@/pref/types';
import { size, Y_FIELD, Z_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */
export default function Scatter(container: HTMLElement, data: Data) {
  const scatter = new ScatterG2plot(container, {
    data,
    xField: Z_FIELD,
    yField: Y_FIELD,
    ...size,
  });

  scatter.render();

  return scatter;
}
