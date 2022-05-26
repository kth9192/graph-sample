import { Bar, BarCustomLayerProps, ResponsiveBar } from '@nivo/bar';
import { CustomLayerProps } from '@nivo/line';
import React, { useEffect, useRef, useState } from 'react';
import { foods, nivoData } from '../shared/nivoResource';
import layoutStyle from '../styles/layout.module.scss';
import { line, curveCatmullRom } from 'd3-shape';
import { ResponsiveSunburst, SunburstCustomLayerProps } from '@nivo/sunburst';

interface Test {
  country: string;
}

const customPalette = ['#3366f6', '#333333', '#ffc871'];

function NivoChart() {
  const [clickedKeyword, setClickedKeyword] = useState<{
    name: string;
    value: string;
  }>({ name: '차박', value: '' });

  //TODO: 중복단어 금지
  const [data, setData] = useState(nivoData);

  const handleReset = () => {
    setData(Object.assign(nivoData, {}));

    setClickedKeyword({ name: '차박', value: '' });
  };

  const CenteredMetric = ({
    nodes,
    centerX,
    centerY,
  }: SunburstCustomLayerProps<any>) => {
    const total = nodes.reduce((total, datum) => total + datum.value, 0);

    const ref = useRef<SVGTextElement>(null);

    useEffect(() => {
      console.log(ref.current?.clientWidth);
    }, [ref]);

    return (
      <>
        <text
          ref={ref}
          x={centerX}
          y={centerY - (clickedKeyword.value ? 21 : 0)}
          textAnchor="middle"
          dominantBaseline="central"
          style={{
            fontSize: '42px',
            fontWeight: 600,
          }}
        >
          {18457}점
        </text>
      </>
    );
  };

  const flatten = (data: { name: string; children: any[] }[]) =>
    data.reduce((acc: any[], item) => {
      if (item.children) {
        return [...acc, item, ...flatten(item.children)];
      }

      return [...acc, item];
    }, []);

  const findObject = (data: any, name: string) =>
    data.find((searchedName: { name: string }) => searchedName.name === name);

  const handleClick = (clickedData: any, event: any) => {
    console.log('====================================');
    console.log(clickedData);
    console.log('====================================');

    const foundObject = findObject(flatten(data.children), clickedData.id);
    if (foundObject && foundObject.children) {
      setData(foundObject);
      setClickedKeyword({
        name: clickedData.data.name,
        value: clickedData.formattedValue,
      });
    }
  };

  return (
    <div className="flex flex-col">
      <button
        className=" w-[132px] h-[48px] text-white font-bold rounded bg-indigo-200 py-2 ml-auto mr-[200px]"
        onClick={handleReset}
      >
        reset
      </button>
      <div className="w-screen h-screen">
        <ResponsiveSunburst
          data={data}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          id="name"
          value="loc"
          cornerRadius={2}
          // borderColor={{ theme: 'background' }}
          // colors={{ scheme: 'nivo' }}

          colors={customPalette}
          childColor={{
            from: 'color',
            modifiers: [['brighter', 0.5]],
          }}
          valueFormat={(data) => `${data}점`}
          enableArcLabels={true}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor="black"
          onClick={handleClick}
          transitionMode="startAngle"
          layers={['arcs', 'arcLabels', CenteredMetric]}
        />
      </div>
      {/* <div className="flex flex-col  h-1/3">
        <ResponsiveSunburst
          data={data}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          id="name"
          value="loc"
          cornerRadius={2}
          // borderColor={{ theme: 'background' }}
          // colors={{ scheme: 'nivo' }}
          colors={customPalette}
          childColor={{
            from: 'color',
            modifiers: [['brighter', 0.5]],
          }}
          enableArcLabels={true}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: 'color',
            modifiers: [['darker', 1.4]],
          }}
          onClick={(clickedData: any, event: any) => {
            console.log('====================================');
            console.log(clickedData);
            console.log('====================================');
          }}
          transitionMode="startAngle"
          layers={['arcs', 'arcLabels', CenteredMetric]}
        />
      </div> */}
    </div>
  );
}

export default NivoChart;
