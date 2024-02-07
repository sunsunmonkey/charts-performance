import { PerfCase } from '../types';
import { pathToCase } from '../utils';

// 所有的 case 管理
const CASES = new Map<string, PerfCase>();

// 动态读取导入所有case
const allCase = import.meta.glob('../cases/**/*.ts', {
  import: 'default',
  eager: true,
});
const allCaseKeys = Object.keys(allCase);
allCaseKeys.map((item) => {
  CASES.set(pathToCase(item), allCase[item] as PerfCase);
});

export function getPerfCase(engine: string, type: string): PerfCase {
  return CASES.get(`${engine.toLowerCase()}-${type.toLowerCase()}`);
}
