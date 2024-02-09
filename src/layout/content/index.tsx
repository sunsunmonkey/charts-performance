import { Flex, Modal, Progress } from 'antd';
import { useRef, useState } from 'react';

import { ChartType, EnginesType } from '@/common/const';
import { run } from '@/pref/runner';
import { PerfData } from '@/pref/types';

import Config from './config';
import Result from './result';

export interface IConfig {
  engines: EnginesType[];
  types: ChartType[];
  start: number;
  end: number;
  step: number;
}

export interface IProgress {
  percent: number;
  total: number;
  count: number;
  engine: EnginesType;
  type: ChartType;
}

export const Content = () => {
  const [open, setOpen] = useState(false);
  const [perfData, setPerfData] = useState<PerfData>({} as PerfData);
  const typeArr: ChartType[] = Object.keys(perfData) as ChartType[];

  const [progress, setProgress] = useState<IProgress>({} as IProgress);
  const isShouldRun = useRef<boolean>(false);

  const openModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const onFinish = (config: IConfig) => {
    console.log(config);
    setProgress({ percent: 0 } as IProgress);
    openModal();
    setTimeout(async () => {
      const perfData = await run(config, setProgress, hideModal, isShouldRun);
      setPerfData(perfData);
    });
  };

  return (
    <div className="mt-28">
      <Config onFinish={onFinish} />
      {!isShouldRun.current &&
        typeArr.map((type) => {
          return <Result data={perfData[type]} type={type} key={type} />;
        })}

      <Modal
        title="running..."
        centered
        open={open}
        onCancel={() => {
          hideModal();
          isShouldRun.current = false;
        }}
        maskClosable={false}
        okButtonProps={{
          style: { display: 'none' },
        }}
        cancelButtonProps={{
          type: 'primary',
        }}
        width={900}
      >
        <Progress percent={progress.percent} />
        <Flex className="pb-2">
          <div className="pr-5">{`${progress.engine}/ ${progress.type}`}</div>
          <div>data: &nbsp;{`${progress.count}/ ${progress.total}`}</div>
        </Flex>

        <div id="modalBody" className="flex justify-center"></div>
      </Modal>
    </div>
  );
};
