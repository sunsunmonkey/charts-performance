import { Col, Flex, Modal, Progress, Row, Segmented } from 'antd';
import { useRef, useState } from 'react';

import { run } from '@/pref/runner';
import { PerfData } from '@/pref/types';

import Config from './config';
import ENGINES_DATA from './meta.json';
import Result from './result';
export interface IConfig {
  engine: string;
  compareEngines: string[];
  types: string[];
  start: number;
  end: number;
  step: number;
}

export interface IProgress {
  percent: number;
  total: number;
  count: number;
  compareEngine: string;
  type: string;
}

export const Content = () => {
  const [open, setOpen] = useState(false);
  const [perfData, setPerfData] = useState<PerfData>({} as PerfData);
  const [progress, setProgress] = useState<IProgress>({} as IProgress);
  const [engine, setEngine] = useState('G');

  const typeArr: string[] = Object.keys(perfData);
  const ENGINES = Object.keys(ENGINES_DATA);

  const isShouldRun = useRef<boolean>(false);

  const openModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const onFinish = (config: IConfig) => {
    setProgress({ percent: 0 } as IProgress);
    openModal();
    setTimeout(async () => {
      const perfData = await run(config, setProgress, hideModal, isShouldRun);
      setPerfData(perfData);
    });
  };

  return (
    <div className="mt-28">
      <Row>
        <Col span={14} offset={4}>
          <Segmented
            size="large"
            options={ENGINES}
            block
            onChange={(value) => {
              setEngine(value);
            }}
          ></Segmented>
        </Col>
      </Row>

      <Config onFinish={onFinish} engine={engine} />

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
          {progress.count ? (
            <>
              <div className="pr-5">{`${progress.compareEngine}/ ${progress.type}`}</div>
              <div>data: &nbsp;{`${progress.count}/ ${progress.total}`}</div>
            </>
          ) : (
            <div>loading...</div>
          )}
        </Flex>

        <div id="modalBody" className="flex justify-center"></div>
      </Modal>
    </div>
  );
};
