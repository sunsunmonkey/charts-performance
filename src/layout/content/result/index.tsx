import { Line } from '@antv/g2plot';
import { Flex } from 'antd';
import G2Plot from 'react-g2plot';

import { ChartType } from '@/common/const';
import { PerfDatum } from '@/pref/types';

interface Iprops {
  data: PerfDatum[];
  type: ChartType;
}

export default function Result({ data, type }: Iprops) {
  const LINE_CONFIG = {
    height: 300,
    xField: 'length',
    yField: 'time',
    seriesField: 'engine',
    meta: {
      length: {
        type: 'cat',
      },
    },
    color: [
      '#9270CA',
      '#269A99',
      '#5AD8A6',
      '#F6BD16',
      '#6DC8EC',
      '#FF9D4D',
      '#FF99C3',
      '#BDD2FD',
      '#BEDED1',
      '#C2C8D5',
      '#EFE0B5',
      '#F6C3B7',
      '#B5D7E5',
      '#D3C6EA',
      '#F4DBC6',
      '#AAD8D8',
      '#F2CADA',
    ],
    yAxis: {
      title: {
        text: 'Time (ms)',
        style: {
          fontSize: 12,
        },
      },
    },
    xAxis: {
      title: {
        text: 'Data Size',
        style: {
          fontSize: 12,
        },
      },
    },
    label: {
      style: {
        fill: '#aaa',
      },
      formatter: function formatter(datum) {
        return `${datum.time.toFixed(2)} ms`;
      },
    },
  };
  return (
    <Flex justify="center" className="mt-10 border-4 border-slate-300">
      <div className=" h-96  w-[67%]  rounded-lg border-2 border-solid border-slate-200">
        <div className="px-5 py-3">
          {type}
          <G2Plot
            options={{
              ...LINE_CONFIG,
              data: (data || []).map((d) => ({
                ...d,
                length: `${d.length}`,
              })),
            }}
            Ctor={Line}
          ></G2Plot>
        </div>
      </div>
    </Flex>
  );
}
