import { Data } from '../types';
import { sleep } from '../utils';

/**
 * @name 图表的包装器用于测速
 * @param render 用例中的图表渲染器
 * @returns 计算时间结果的函数
 */

// eslint-disable-next-line no-unused-vars
type IRender = (container: HTMLElement, data: Data) => any;

export default function chartWrapper(render: IRender) {
  return async (container: HTMLElement, data: Data) => {
    const startTime = performance.now();

    const chart = await render(container, data);

    const endTime = performance.now();

    await sleep();

    chart.dispose?.();
    chart.destroy?.();

    return endTime - startTime;
  };
}
