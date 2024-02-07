import { Modal, Progress } from 'antd';
import { useRef, useState } from 'react';

import { ChartType, EnginesType } from '@/common/const';
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

  return (
    <div className="mt-28">
      <Config
        openModal={openModal}
        setPerfData={setPerfData}
        setProgress={setProgress}
        hideModal={hideModal}
        isShouldRun={isShouldRun}
      />
      {!isShouldRun.current &&
        typeArr.map((type) => {
          return <Result data={perfData[type]} type={type} key={type} />;
        })}

      <Modal
        title="performancing"
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
        <div className="pb-2">{`${progress.engine}/ ${progress.type}`}</div>

        <div id="modalBody" className="flex justify-center"></div>
      </Modal>
    </div>
  );
};
