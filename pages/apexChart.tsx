import React from 'react';
import Apexcharts from 'react-apexcharts';

const resourceOne = {
  series: [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
  options: {
    chart: {
      id: 'mix-bar',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  },
};

function ApexChart() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <Apexcharts
        type="bar"
        options={resourceOne.options}
        series={resourceOne.series}
      ></Apexcharts>
    </div>
  );
}

export default ApexChart;
