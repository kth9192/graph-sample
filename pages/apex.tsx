import React, { useEffect, useState } from 'react';

import {
  dataSets,
  resourceFive,
  resourceFour,
  resourceOne,
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
    </div>
  );
}

export default Apex;
