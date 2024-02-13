import { PerfCase } from '../types';
import { pathToCase } from '../utils';
import chartWrapper from './chartWrapper';

// 所有的 case 管理
const CASES = new Map<string, PerfCase>();

// 动态读取导入所有case
const allCase = import.meta.glob('../cases/*/*/*.ts', {
  import: 'default',
  eager: true,
});

const allCaseKeys = Object.keys(allCase);

allCaseKeys.map((item) => {
  CASES.set(pathToCase(item), allCase[item] as PerfCase);
});

/**
 *
 * @param engine 目前的引擎
 * @param compareEngine 选中的比较同类比较引擎
 * @param type 图像类型
 */

export function getPerfCase(
  engine: string,
  compareEngine: string,
  type: string
): PerfCase {
  return chartWrapper(
    CASES.get(
      `${engine.toLowerCase()}-${compareEngine.toLowerCase()}-${type.toLowerCase()}`
    )
  );
}
