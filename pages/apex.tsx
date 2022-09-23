import React, { useEffect, useState } from 'react';

import {
  dataSets,
  detectionBendResource,
  detectionResource,
  multilineOpt,
  resourceEight,
  resourceFive,
  resourceFour,
  resourceNine,
  resourceOne,
  resourceSeven,
  resourceSix,
  resourceThree,
  resourceTwo,
} from '../shared/resource';
import layoutStyle from '../styles/layout.module.scss';
import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function Apex() {
  return (
    <div className={layoutStyle.dashboard}>
      <div className="flex flex-col items-center w-full h-full">
        <h2>이중 바</h2>

        <div className="w-full">
          <ApexChart
            type="bar"
            options={resourceOne.options}
            series={resourceOne.series}
          ></ApexChart>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full">
        <h2>복합 차트</h2>

        <div className="w-full flex-1">
          <ApexChart
            type="line"
            options={resourceTwo.options}
            series={resourceTwo.series}
          ></ApexChart>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full">
        <h2>다중 영역 차트</h2>

        <div className="w-full flex-1">
          <ApexChart
            type="area"
            options={resourceThree.options}
            series={resourceThree.series}
          ></ApexChart>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full">
        <h2>스택바 차트</h2>

        <div className="w-full flex-1">
          <ApexChart
            type="bar"
            options={resourceFour.options}
            series={resourceFour.series}
          ></ApexChart>
        </div>
      </div>{' '}
      <div className="flex flex-col items-center w-full h-full">
        <h2>레이더 차트</h2>

        <div className="w-full flex-1">
          <ApexChart
            type="radar"
            options={resourceFive.options}
            series={resourceFive.series}
          ></ApexChart>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full">
        <h2>반대 차트</h2>

        <div className="w-full flex-1">
          <ApexChart
            type="bar"
            options={resourceSix.options}
            series={resourceSix.series}
          ></ApexChart>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full">
        <h2> 파이 차트</h2>
        <div className="w-full flex-1">
          <ApexChart
            type="pie"
            options={resourceSeven.options}
            series={resourceSeven.series}
          ></ApexChart>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full">
        <h2> 도넛 차트</h2>
        <div className="w-full flex-1">
          <ApexChart
            type="donut"
            options={resourceSeven.options}
            series={resourceSeven.series}
          ></ApexChart>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full">
        <h2>트리맵 차트</h2>
        <div className="w-full flex-1">
          <ApexChart
            type="treemap"
            options={resourceEight.options}
            series={resourceEight.series}
          ></ApexChart>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full">
        <h2>사분면 차트</h2>
        <div className="relative w-full  flex p-8 justify-center items-center">
          <div className="absolute w-full flex-1 justify-between flex my-auto">
            <span className=" top-16 left-20 text-[#72777E] whitespace-nowrap">
              부정
            </span>
            <span className=" top-16 right-20 text-[#72777E] whitespace-nowrap">
              긍정
            </span>
          </div>

          <div className="absolute  h-full flex-1 justify-between flex mx-auto py-[30px] flex-col">
            <span className=" top-16 left-20 text-[#72777E] whitespace-nowrap">
              게시글 많음
            </span>
            <span className=" top-16 right-20 text-[#72777E] whitespace-nowrap">
              게시글 적음
            </span>
          </div>
          <ApexChart
            type="scatter"
            width={'852px'}
            height={'200px'}
            options={resourceNine.options}
            series={resourceNine.series}
          ></ApexChart>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full">
        <h2>다중 라인 차트</h2>

        <div className="w-full flex-1">
          <ApexChart
            type="line"
            options={multilineOpt.options}
            series={multilineOpt.series}
          ></ApexChart>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full">
        <h2> 한계 차트</h2>

        <div className="w-full flex-1">
          <ApexChart
            options={detectionResource({
              max: 25,
              min: 10,
              sentence: '정상 범위',
            })}
            series={resourceNine.series.map((test) => {
              return {
                ...test,
                color:
                  test.data[0].y < 10 || test.data[0].y > 25
                    ? '#ff6161'
                    : '#3367f6',
              };
            })}
          ></ApexChart>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full">
        <h2> 한계 밴드 차트</h2>

        <div className="w-full flex-1">
          <ApexChart
            options={detectionBendResource({
              max: 25,
              min: 10,
              sentence: '정상 범위',
            })}
            series={[
              {
                name: '최대치',
                type: 'line',
                color: '#ff6161',
                // data: [1000, 800, 900, 700, 800, 1300],
                data: [
                  { x: '2022-01-01', y: 1000 },
                  { x: '2022-01-02', y: 800 },
                  { x: '2022-01-03', y: 900 },
                  { x: '2022-01-04', y: 700 },
                  { x: '2022-01-05', y: 800 },
                  { x: '2022-01-06', y: 1300 },
                ],
              },
              {
                name: '최소치',
                type: 'line',
                color: '#ff6161',
                // data: [500, 300, 400, 200, 300, 800],
                data: [
                  { x: '2022-01-01', y: 500 },
                  { x: '2022-01-02', y: 300 },
                  { x: '2022-01-03', y: 400 },
                  { x: '2022-01-04', y: 200 },
                  { x: '2022-01-05', y: 300 },
                  { x: '2022-01-06', y: 800 },
                ],
              },
              {
                name: 'count',
                type: 'scatter',
                // data: [100, 200, 600, 200, 300, 900],

                data: [
                  {
                    x: '2022-01-01',
                    y: 100,
                    fillColor: fixColor(100, 1000, 500),
                  },
                  {
                    x: '2022-01-02',
                    y: 100,
                    fillColor: fixColor(100, 800, 300),
                  },
                  {
                    x: '2022-01-03',
                    y: 500,
                    fillColor: fixColor(500, 900, 400),
                  },
                  {
                    x: '2022-01-04',
                    y: 200,
                    fillColor: fixColor(200, 700, 200),
                  },
                  {
                    x: '2022-01-05',
                    y: 300,
                    fillColor: fixColor(300, 800, 300),
                  },
                  {
                    x: '2022-01-06',
                    y: 500,
                    fillColor: fixColor(900, 1300, 800),
                  },
                ],
              },
            ]}
          ></ApexChart>
        </div>
      </div>
    </div>
  );
}

const fixColor = (value: number, max: number, min: number) => {
  return value < max && value > min ? '#3367f6' : '#ff6161';
};

export default Apex;
