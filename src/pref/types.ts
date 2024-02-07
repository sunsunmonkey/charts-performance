import { ChartType, EnginesType } from '@/common/const';

export type PerfDatum = {
  engine: EnginesType;
  type: ChartType;
  length: number;
  time: number;
};
export type PerfData = Record<ChartType, PerfDatum[]>;

export type Datum = Record<string, any>;
export type Data = Datum[];
// eslint-disable-next-line no-unused-vars
export type PerfCase = (container: HTMLElement, data: Data) => Promise<number>;
