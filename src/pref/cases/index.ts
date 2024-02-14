import { ImportCaseType, PerfCase } from '../types';
import { pathToCaseId } from '../utils';
import { timerWrapper } from './chartWrapper';

// 所有的 case 管理
const CASES = new Map<string, ImportCaseType | PerfCase | boolean>();

// 动态读取导入所有case
// 默认为懒加载
const allCase = import.meta.glob('../cases/*/*/*.ts', {
  import: 'default',
});

let allCaseKeys = Object.keys(allCase);

allCaseKeys = allCaseKeys.map((item) => {
  const caseId = pathToCaseId(item);
  CASES.set(caseId, allCase[item] as ImportCaseType);

  return caseId;
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
  return timerWrapper(
    CASES.get(
      `${engine.toLowerCase()}-${compareEngine.toLowerCase()}-${type.toLowerCase()}`
    ) as PerfCase
  );
}

//激活用例，从lazy状态下激活
export async function activateCase(engine: string) {
  await Promise.all(
    allCaseKeys.map(async (item: string) => {
      //如果含有该字段并且没有被唤醒过
      if (item.includes(engine.toLowerCase() + '-') && !CASES.get(engine)) {
        const render = await (CASES.get(item) as ImportCaseType)();
        CASES.set(item, render);
      }
    })
  );

  //设置字段已经被唤醒
  CASES.set(engine, true);
}
