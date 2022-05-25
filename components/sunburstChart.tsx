import React from 'react';
import * as d3 from 'd3';
import { sunData } from '../shared/resource';

const SIZE = 975;
const RADIUS = SIZE / 2;

interface Data {
  name: string;
  value?: number;
}

function SunburstChart() {
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [viewBox, setViewBox] = React.useState('0,0,0,0');

  const partition = (data: Data) =>
    d3.partition<Data>().size([2 * Math.PI, RADIUS])(
      d3
        .hierarchy(data)
        .sum((d) => d.value ?? 0)
        .sort((a, b) => (b.value ?? 0) - (a.value ?? 0)),
    );

  const color = d3.scaleOrdinal(
    d3.quantize(d3.interpolateRainbow, sunData.children.length + 1),
  );

  const format = d3.format(',d');

  const arc = d3
    .arc<d3.HierarchyRectangularNode<Data>>()
    .startAngle((d) => d.x0)
    .endAngle((d) => d.x1)
    .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
    .padRadius(RADIUS / 2)
    .innerRadius((d) => d.y0)
    .outerRadius((d) => d.y1 - 1);

  const getAutoBox = () => {
    if (!svgRef.current) {
      return '';
    }

    const { x, y, width, height } = svgRef.current.getBBox();

    return [x, y, width, height].toString();
  };

  React.useEffect(() => {
    setViewBox(getAutoBox());
  }, []);

  const getColor = (d: d3.HierarchyRectangularNode<Data>) => {
    while (d.depth > 1) d.parent !== null && (d = d.parent);
    return color(d.data.name);
  };

  const getTextTransform = (d: d3.HierarchyRectangularNode<Data>) => {
    const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
    const y = (d.y0 + d.y1) / 2;
    return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
  };

  const root = partition(sunData);

  return (
    <svg width={SIZE} height={SIZE} viewBox={viewBox} ref={svgRef}>
      <g fillOpacity={0.6}>
        {root
          .descendants()
          .filter((d) => d.depth)
          .map(
            (d, i) =>
              d && (
                <path
                  key={`${d.data.name}-${i}`}
                  fill={getColor(d)}
                  d={arc(d) ?? undefined}
                >
                  <text>
                    {d
                      .ancestors()
                      .map((d) => d.data.name)
                      .reverse()
                      .join('/')}
                    \n${format(d.value ?? 0)}
                  </text>
                </path>
              ),
          )}
      </g>
      <g
        pointerEvents="none"
        textAnchor="middle"
        fontSize={10}
        fontFamily="sans-serif"
      >
        {root
          .descendants()
          .filter((d) => d.depth && ((d.y0 + d.y1) / 2) * (d.x1 - d.x0) > 10)
          .map((d, i) => (
            <text
              key={`${d.data.name}-${i}`}
              transform={getTextTransform(d)}
              dy="0.35em"
            >
              {d.data.name}
            </text>
          ))}
      </g>
    </svg>
  );
}

export default SunburstChart;
