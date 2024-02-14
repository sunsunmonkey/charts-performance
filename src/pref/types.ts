export type PerfDatum = {
  compareEngine: string;
  type: string;
  length: number;
  time: number;
};
export type PerfData = Record<string, PerfDatum[]>;

export type Datum = Record<string, any>;
export type Data = Datum[];
// eslint-disable-next-line no-unused-vars
export type PerfCase = (container: HTMLElement, data: Data) => Promise<number>;
export type ImportCaseType = () => Promise<PerfCase>;
