export const dataSets = [
  { label: '트위터', avg: 1230, total: 2000 },
  { label: '인스타그램', avg: 4230, total: 3000 },

  { label: '유튜브', avg: 340, total: 1000 },

  { label: '네이버뉴스', avg: 2, total: 10 },

  { label: '네이버카페', avg: 100, total: 1000 },

  { label: '네이버블로그', avg: 1000, total: 1000 },

  { label: '웃긴대학', avg: 0, total: 10 },

  { label: '오늘의 유머', avg: 100, total: 100 },

  { label: '뽐뿌', avg: 10, total: 1000 },

  { label: '디시갤러리', avg: 2000, total: 1 },
  { label: '보배드림', avg: 10, total: 1000 },
];

export const TreeMapSet = [
  {
    name: '애플',
    size: 100,
    fluctuation: 10.2,
  },
  {
    name: '마이크로소프트',
    size: 95,
    fluctuation: 10,
  },
  {
    name: '알파벳',
    size: 88,
    fluctuation: 1.4,
  },
  {
    name: '구글',
    size: 85,
    fluctuation: 2.7,
  },
  {
    name: '테슬라',
    size: 80,
    fluctuation: 5.3,
  },
  {
    name: '엔비디아',
    size: 70,
    fluctuation: 5.1,
  },
  {
    name: '메타플랫폼스',
    size: 74,
    fluctuation: -2.3,
  },
  {
    name: 'TSMC',
    size: 66,
    fluctuation: 2.1,
  },
  {
    name: '유나이티드헬스그룹',
    size: 40,
    fluctuation: 0.5,
  },
  {
    name: '비자',
    size: 45,
    fluctuation: 1.12,
  },
  {
    name: '존슨앤존슨',
    size: 50,
    fluctuation: -2.31,
  },
  {
    name: 'JP모간 체이스',
    size: 50,
    fluctuation: 3.98,
  },
  {
    name: '삼성',
    size: 10,
    fluctuation: 0.01,
  },
];

export const radarTestSet = [
  {
    subject: '수학',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: '일본어',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: '영어',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: '지정학',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: '물리학',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: '역사학',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0'];

export const resourceOne = {
  series: [
    {
      name: '총 언급량',
      data: dataSets.map((data) => data.total),
    },
    { name: '평균 언급량', data: dataSets.map((data) => data.avg) },
  ],
  options: {
    chart: {
      id: 'mix-bar',
      // events: {
      //   mounted: (chart: { windowResizeHandler: () => void }) => {
      //     chart.windowResizeHandler();
      //   },
      // },
      // redrawOnParentResize: true,
    },
    colors: ['#3366f6', '#ffc871'],
    xaxis: {
      categories: dataSets.map((data) => data.label),
    },
    plotOptions: {
      bar: {},
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    dataLabels: {
      enabled: false,
    },
  },
};

export const resourceTwo = {
  series: [
    {
      name: '총 언급량',
      type: 'line',
      data: dataSets.map((data) => data.total),
    },
    {
      name: '평균 언급량',
      type: 'column',
      data: dataSets.map((data) => data.avg),
    },
    {
      name: '테스트 언급량',
      type: 'area',
      data: dataSets.map((data) =>
        Math.floor(Math.random() * (10000 - 100) + 100),
      ),
    },
  ],
  options: {
    colors: colorPalette,
    chart: {
      id: 'complex',
      // events: {
      //   mounted: (chart: { windowResizeHandler: () => void }) => {
      //     chart.windowResizeHandler();
      //   },
      // },
      // redrawOnParentResize: true,
    },

    fill: {
      type: 'solid',
      opacity: [1, 1, 0.15],
    },

    xaxis: {
      categories: dataSets.map((data) => data.label),
    },

    dataLabels: {
      enabled: false,
    },
  },
};

export const resourceThree = {
  series: [
    {
      name: '트위터 언급량',
      data: dataSets.map((data) => data.total),
    },
    {
      name: '인스타그램 언급량',
      data: dataSets.map((data) => data.avg),
    },
    {
      name: '유튜브 언급량',
      data: dataSets.map((data) =>
        Math.floor(Math.random() * (10000 - 100) + 100),
      ),
    },
  ],
  options: {
    // fill: {
    //   colors: ['#F44336', '#E91E63', '#9C27B0'],
    // },
    chart: {
      id: 'areas',
      // events: {
      //   mounted: (chart: { windowResizeHandler: () => void }) => {
      //     chart.windowResizeHandler();
      //   },
      // },
      // redrawOnParentResize: true,
    },
    colors: colorPalette,

    xaxis: {
      categories: dataSets.map((data) => data.label),
    },

    dataLabels: {
      enabled: false,
    },
  },
};

export const resourceFour = {
  series: [
    {
      name: '긍정 언급량',
      data: dataSets.map((data) => data.total),
    },
    {
      name: '중림 언급량',
      data: dataSets.map((data) => data.avg),
    },
    {
      name: '부정 언급량',
      data: dataSets.map((data) => Math.floor(Math.random() * (100 - 10) + 10)),
    },
  ],
  options: {
    // fill: {
    //   colors: ['#F44336', '#E91E63', '#9C27B0'],
    // },
    chart: {
      id: 'stack',
      stacked: true,

      // events: {
      //   mounted: (chart: { windowResizeHandler: () => void }) => {
      //     chart.windowResizeHandler();
      //   },
      // },
      // redrawOnParentResize: true,
    },
    colors: colorPalette,
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: dataSets.map((data) => data.label),
    },

    dataLabels: {
      enabled: false,
    },
  },
};

export const resourceFive = {
  series: [
    {
      name: '유저 a',
      data: [5, 2, 3, 4, 5],
    },
    {
      name: '유저 b',
      data: [1, 5, 5, 1, 1],
    },
  ],
  options: {
    // fill: {
    //   colors: ['#F44336', '#E91E63', '#9C27B0'],
    // },
    chart: {
      id: 'radar',

      // events: {
      //   mounted: (chart: { windowResizeHandler: () => void }) => {
      //     chart.windowResizeHandler();
      //   },
      // },
      // redrawOnParentResize: true,
    },
    colors: colorPalette,

    xaxis: {
      categories: ['전투', '성장', '생존', '시야', '골드차이'],
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
  },
};

export const resourceSix = {
  series: [
    {
      name: '긍정 언급량',
      data: dataSets.map((data) => data.total),
    },
    { name: '부정 언급량', data: dataSets.map((data) => -data.avg) },
  ],
  options: {
    // fill: {
    //   colors: ['#F44336', '#E91E63', '#9C27B0'],
    // },
    chart: {
      id: 'negative',
      stacked: true,

      // events: {
      //   mounted: (chart: { windowResizeHandler: () => void }) => {
      //     chart.windowResizeHandler();
      //   },
      // },
      // redrawOnParentResize: true,
    },
    colors: colorPalette,

    xaxis: {
      categories: dataSets.map((data) => data.label),
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    yaxis: {
      axisTicks: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  },
};

export const resourceSeven = {
  series: [60, 30, 10],
  options: {
    chart: { id: 'pie' },
    labels: ['긍정 언급량', '중립 언급량', '부정 언급량'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  },
};

export const resourceEight = {
  series: [
    {
      data: [
        {
          x: '애플',
          y: 10.2,
        },
        {
          x: '마이크로소프트',
          y: 10,
        },
        {
          x: '알파벳',
          y: 1.4,
        },
        {
          x: '구글',
          y: 2.7,
        },
        {
          x: '테슬라',
          y: 5.3,
        },
        {
          x: '엔비디아',
          y: 5.1,
        },
        {
          x: '메타플랫폼스',
          y: -2.3,
        },
        {
          x: 'TSMC',
          y: 2.1,
        },
        {
          x: '유나이티드헬스그룹',
          y: 0.5,
        },
        {
          x: '비자',
          y: 1.12,
        },
        {
          x: '존슨앤존슨',
          y: -2.31,
        },
        {
          x: 'JP모간 체이스',
          y: 3.98,
        },
        {
          x: '삼성',
          y: 0.01,
        },
      ],
    },
  ],
  options: {
    chart: { id: 'tree' },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    dataLabels: {
      enabled: true,
      formatter: function (text: string, op: { value: number }) {
        return text + ' ' + (op.value > 0 ? `+${op.value}` : `${op.value}`);
      },
    },
    plotOptions: {
      treemap: {
        enableShades: true,

        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            {
              from: -6,
              to: 0,
              color: '#CD363A',
            },
            {
              from: 0.001,
              to: 6,
              color: '#4AABFC',
            },
          ],
        },
      },
    },
  },
};
