import { IConfig, IProgress } from '@/layout/content';

import { activateCase, getPerfCase } from '../cases';
import { Data, PerfData, PerfDatum } from '../types';
import { createDIV, getSeq, mock, removeDIV } from '../utils';

async function runPerfCase(
  engine: string,
  compareEngine: string,
  type: string,
  length: number,
  mockData: Data
): Promise<PerfDatum> {
  const perfCase = getPerfCase(engine, compareEngine, type);

  // 创建容器
  const div = createDIV(document.getElementById('modalBody')!);

  // 执行
  const time = await perfCase(div, mockData.slice(0, length)); // TODO 优化一下 slice，具备有一定的随机性

  removeDIV(div);

  return {
    compareEngine,
    length,
    time,
    type,
  };
}

export async function run(
  { engine, compareEngines, types, start, end, step }: IConfig,
  setProgress: React.Dispatch<React.SetStateAction<IProgress>>,
  hideModal: () => void,
  isShouldRun: React.MutableRefObject<boolean>
) {
  const r: PerfData = {} as PerfData;
  const seq = getSeq(start, end, step);

  const mockData = mock(end);
  const total = mockData.length;
  isShouldRun.current = true;
  const amount = seq.length * compareEngines.length * types.length;
  let count = 0;

  //激活用例
  await activateCase(engine);

  for (const compareEngine of compareEngines) {
    for (const type of types) {
      for (const length of seq) {
        //取消的判断
        if (isShouldRun.current) {
          const perfDatum = await runPerfCase(
            engine,
            compareEngine,
            type,
            length,
            mockData
          );

          if (!r[type]) {
            r[type] = [];
          }

          r[type].push(perfDatum);

          //设置进度条进度状况
          const percent = Math.round((count / amount) * 100);
          count++;

          setProgress({ percent, type, compareEngine, total, count: length });
        }
      }
    }
  }

  isShouldRun.current = false;
  hideModal();
  return r;
}
