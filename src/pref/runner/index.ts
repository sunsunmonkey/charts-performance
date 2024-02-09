import { ChartType, EnginesType } from '@/common/const';
import { IConfig, IProgress } from '@/layout/content';

import { getPerfCase } from '../cases';
import { Data, PerfData, PerfDatum } from '../types';
import { createDIV, getSeq, mock, removeDIV } from '../utils';

async function runPerfCase(
  engine: EnginesType,
  type: ChartType,
  length: number,
  mockData: Data
): Promise<PerfDatum> {
  const perfCase = getPerfCase(engine, type);

  // 创建容器
  const div = createDIV(document.getElementById('modalBody')!);

  // 执行
  const time = await perfCase(div, mockData.slice(0, length)); // TODO 优化一下 slice，具备有一定的随机性

  removeDIV(div);

  return {
    engine,
    length,
    time,
    type,
  };
}

export async function run(
  { engines, types, start, end, step }: IConfig,
  setProgress: React.Dispatch<React.SetStateAction<IProgress>>,
  hideModal: () => void,
  isShouldRun: React.MutableRefObject<boolean>
) {
  const r: PerfData = {} as PerfData;
  const seq = getSeq(start, end, step);

  const mockData = mock(end);
  const total = mockData.length;
  isShouldRun.current = true;
  const amount = seq.length * engines.length * types.length;
  let count = 0;

  for (const engine of engines) {
    for (const type of types) {
      for (const length of seq) {
        //取消的判断
        if (isShouldRun.current) {
          const perfDatum = await runPerfCase(engine, type, length, mockData);

          if (!r[type]) {
            r[type] = [];
          }

          r[type].push(perfDatum);

          const percent = Math.round((count / amount) * 100);
          count++;

          setProgress({ percent, type, engine, total, count: length });
        }
      }
    }
  }
  isShouldRun.current = false;
  hideModal();
  return r;
}
