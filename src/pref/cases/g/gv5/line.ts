import { Polyline } from 'Gv5';

import { Data } from '@/pref/types';

export default function Line(container: HTMLElement, data: Data) {
  const points: [number, number][] = data.map((item) => {
    return [item.y, item.z];
  });
  const polyline = new Polyline({
    style: {
      points,
      stroke: '#1890FF',
      lineWidth: 20,
      lineCap: 'round',
      cursor: 'pointer',
    },
  });
  return polyline;
}
