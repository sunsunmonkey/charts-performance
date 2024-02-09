import { Button, Checkbox, Flex, Form, InputNumber } from 'antd';

import { CHART_TYPES, ENGINES } from '@/common/const';

import { IConfig } from '..';

interface IProps {
  // eslint-disable-next-line no-unused-vars
  onFinish: (config: IConfig) => void;
}

export default function Config({ onFinish }: IProps) {
  return (
    <Form
      className="mt-10"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      initialValues={{
        engines: [],
        types: [],
        start: 200,
        end: 10000,
        step: 200,
      }}
      onFinish={onFinish}
    >
      <Form.Item name="engines" label="Chart Engines">
        <Checkbox.Group
          options={ENGINES.map((item) => ({ value: item, label: item }))}
        />
      </Form.Item>
      <Form.Item name="types" label="Chart Types">
        <Checkbox.Group
          options={CHART_TYPES.map((item) => ({ value: item, label: item }))}
        />
      </Form.Item>
      <Form.Item label="Data">
        <Flex>
          <Form.Item name="start">
            <InputNumber size="small" step={100} precision={0}></InputNumber>
          </Form.Item>
          <span className="mx-2 text-lg ">~</span>
          <Form.Item name="end">
            <InputNumber size="small" step={100} precision={0}></InputNumber>
          </Form.Item>
          <span className="mx-2"></span>
          <Form.Item name="step" label="step">
            <InputNumber size="small" step={100} precision={0}></InputNumber>
          </Form.Item>
        </Flex>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
        <Button type="primary" htmlType="submit">
          performance
        </Button>
      </Form.Item>
    </Form>
  );
}
