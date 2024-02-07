//@ts-ignore
import 'https://cdnjs.cloudflare.com/ajax/libs/antv-g2/4.1.9/g2.min.js';

import { Data } from '@/pref/types';
import { size, sleep, X_FIELD, Y_FIELD } from '@/pref/utils';

/**
 * @param container
 * @param data
 */

//@ts-ignore
// eslint-disable-next-line no-undef
const G2v4 = G2;
export default async function Line(
  container: HTMLElement,
  data: Data
): Promise<number> {
  const startTime = performance.now();
  //@ts-ignore
  // eslint-disable-next-line no-undef
  const chart = new G2v4.Chart({
    container,
    ...size,
  });
  chart.data(data);
  chart.line().position(`${X_FIELD}*${Y_FIELD}`);

  chart.render();
  const endTime = performance.now();

  await sleep();

  chart.destroy();
  // 返回最后的时间
  return endTime - startTime;
}
