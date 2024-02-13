import { Button, Checkbox, Flex, Form, InputNumber } from 'antd';
import { useEffect } from 'react';

import { IConfig } from '..';
import ENGINES_DATA from '../meta.json';

interface IProps {
  engine: string;
  // eslint-disable-next-line no-unused-vars
  onFinish: (config: IConfig) => void;
}

export default function Config({ onFinish, engine }: IProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      compareEngines: ENGINES_DATA[engine].compareEngine,
      types: ENGINES_DATA[engine].chartType,
      start: 200,
      end: 10000,
      step: 200,
    });
  }, [engine, form]);

  return (
    <Form
      form={form}
      className="mt-10"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      onFinish={(value) => {
        onFinish({
          engine,
          ...value,
        });
      }}
    >
      <Form.Item name="compareEngines" label="Compare Engines">
        <Checkbox.Group
          options={ENGINES_DATA[engine].compareEngine.map((item) => ({
            value: item,
            label: item,
          }))}
        />
      </Form.Item>
      <Form.Item name="types" label="Chart Types">
        <Checkbox.Group
          options={ENGINES_DATA[engine].chartType.map((item) => ({
            value: item,
            label: item,
          }))}
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
