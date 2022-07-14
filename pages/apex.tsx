import React, { useEffect, useState } from 'react';

import {
  dataSets,
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
            height={'200'}
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
    </div>
  );
}

export default Apex;
