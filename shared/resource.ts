export const dataSets = [
  { label: '트위터', avg: 1, total: 2000 },
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

      events: {
        click: function (event, chartContext, config) {
          console.log(event, chartContext, config);
        },
      },
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
      min: -5000,
      max: 5000,

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
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: '언급량 비율',
              formatter: (val) => (typeof val === 'number' ? Number(val) : 0),
            },
          },
        },
      },
    },
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

export const resourceNine = {
  series: [
    {
      name: '인스타그램',
      data: [[16.4, 5.4]],
    },
    {
      name: '유튜브',
      data: [[-36.4, 13.4]],
    },
    {
      name: '트위터',
      data: [[-36.4, -13.4]],
    },
    {
      name: '네이버블로그',
      data: [[36.4, -13.4]],
    },
  ],
  options: {
    chart: {
      id: 'scatter',
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter: function (val) {
          return parseFloat(val).toFixed(1);
        },
      },
    },

    yaxis: {
      tickAmount: 7,
    },
    annotations: {
      yaxis: [
        {
          y: 0,
          strokeDashArray: 0,
          borderColor: '#111',
          borderWidth: 1,
          opacity: 1,
        },
      ],
      xaxis: [
        {
          x: 0,
          strokeDashArray: 0,
          borderColor: '#111',
          borderWidth: 1,
          opacity: 1,
        },
      ],
    },
  },
};

export const multilineOpt = {
  series: [
    {
      name: '트위터',
      type: 'line',
      data: dataSets.map((data) => data.total),
    },
    {
      name: '인스타그램',
      type: 'line',
      data: dataSets.map((data) => data.avg),
    },
    {
      name: '유튜브',
      type: 'line',
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

export const sunData = {
  name: 'flare',
  children: [
    {
      name: 'analytics',
      children: [
        {
          name: 'cluster',
          children: [
            { name: 'AgglomerativeCluster', value: 3938 },
            { name: 'CommunityStructure', value: 3812 },
            { name: 'HierarchicalCluster', value: 6714 },
            { name: 'MergeEdge', value: 743 },
          ],
        },
        {
          name: 'graph',
          children: [
            { name: 'BetweennessCentrality', value: 3534 },
            { name: 'LinkDistance', value: 5731 },
            { name: 'MaxFlowMinCut', value: 7840 },
            { name: 'ShortestPaths', value: 5914 },
            { name: 'SpanningTree', value: 3416 },
          ],
        },
        {
          name: 'optimization',
          children: [{ name: 'AspectRatioBanker', value: 7074 }],
        },
      ],
    },
    {
      name: 'animate',
      children: [
        { name: 'Easing', value: 17010 },
        { name: 'FunctionSequence', value: 5842 },
        {
          name: 'interpolate',
          children: [
            { name: 'ArrayInterpolator', value: 1983 },
            { name: 'ColorInterpolator', value: 2047 },
            { name: 'DateInterpolator', value: 1375 },
            { name: 'Interpolator', value: 8746 },
            { name: 'MatrixInterpolator', value: 2202 },
            { name: 'NumberInterpolator', value: 1382 },
            { name: 'ObjectInterpolator', value: 1629 },
            { name: 'PointInterpolator', value: 1675 },
            { name: 'RectangleInterpolator', value: 2042 },
          ],
        },
        { name: 'ISchedulable', value: 1041 },
        { name: 'Parallel', value: 5176 },
        { name: 'Pause', value: 449 },
        { name: 'Scheduler', value: 5593 },
        { name: 'Sequence', value: 5534 },
        { name: 'Transition', value: 9201 },
        { name: 'Transitioner', value: 19975 },
        { name: 'TransitionEvent', value: 1116 },
        { name: 'Tween', value: 6006 },
      ],
    },
    {
      name: 'data',
      children: [
        {
          name: 'converters',
          children: [
            { name: 'Converters', value: 721 },
            { name: 'DelimitedTextConverter', value: 4294 },
            { name: 'GraphMLConverter', value: 9800 },
            { name: 'IDataConverter', value: 1314 },
            { name: 'JSONConverter', value: 2220 },
          ],
        },
        { name: 'DataField', value: 1759 },
        { name: 'DataSchema', value: 2165 },
        { name: 'DataSet', value: 586 },
        { name: 'DataSource', value: 3331 },
        { name: 'DataTable', value: 772 },
        { name: 'DataUtil', value: 3322 },
      ],
    },
    {
      name: 'display',
      children: [
        { name: 'DirtySprite', value: 8833 },
        { name: 'LineSprite', value: 1732 },
        { name: 'RectSprite', value: 3623 },
        { name: 'TextSprite', value: 10066 },
      ],
    },
    { name: 'flex', children: [{ name: 'FlareVis', value: 4116 }] },
    {
      name: 'physics',
      children: [
        { name: 'DragForce', value: 1082 },
        { name: 'GravityForce', value: 1336 },
        { name: 'IForce', value: 319 },
        { name: 'NBodyForce', value: 10498 },
        { name: 'Particle', value: 2822 },
        { name: 'Simulation', value: 9983 },
        { name: 'Spring', value: 2213 },
        { name: 'SpringForce', value: 1681 },
      ],
    },
    {
      name: 'query',
      children: [
        { name: 'AggregateExpression', value: 1616 },
        { name: 'And', value: 1027 },
        { name: 'Arithmetic', value: 3891 },
        { name: 'Average', value: 891 },
        { name: 'BinaryExpression', value: 2893 },
        { name: 'Comparison', value: 5103 },
        { name: 'CompositeExpression', value: 3677 },
        { name: 'Count', value: 781 },
        { name: 'DateUtil', value: 4141 },
        { name: 'Distinct', value: 933 },
        { name: 'Expression', value: 5130 },
        { name: 'ExpressionIterator', value: 3617 },
        { name: 'Fn', value: 3240 },
        { name: 'If', value: 2732 },
        { name: 'IsA', value: 2039 },
        { name: 'Literal', value: 1214 },
        { name: 'Match', value: 3748 },
        { name: 'Maximum', value: 843 },
        {
          name: 'methods',
          children: [
            { name: 'add', value: 593 },
            { name: 'and', value: 330 },
            { name: 'average', value: 287 },
            { name: 'count', value: 277 },
            { name: 'distinct', value: 292 },
            { name: 'div', value: 595 },
            { name: 'eq', value: 594 },
            { name: 'fn', value: 460 },
            { name: 'gt', value: 603 },
            { name: 'gte', value: 625 },
            { name: 'iff', value: 748 },
            { name: 'isa', value: 461 },
            { name: 'lt', value: 597 },
            { name: 'lte', value: 619 },
            { name: 'max', value: 283 },
            { name: 'min', value: 283 },
            { name: 'mod', value: 591 },
            { name: 'mul', value: 603 },
            { name: 'neq', value: 599 },
            { name: 'not', value: 386 },
            { name: 'or', value: 323 },
            { name: 'orderby', value: 307 },
            { name: 'range', value: 772 },
            { name: 'select', value: 296 },
            { name: 'stddev', value: 363 },
            { name: 'sub', value: 600 },
            { name: 'sum', value: 280 },
            { name: 'update', value: 307 },
            { name: 'variance', value: 335 },
            { name: 'where', value: 299 },
            { name: 'xor', value: 354 },
            { name: '_', value: 264 },
          ],
        },
        { name: 'Minimum', value: 843 },
        { name: 'Not', value: 1554 },
        { name: 'Or', value: 970 },
        { name: 'Query', value: 13896 },
        { name: 'Range', value: 1594 },
        { name: 'StringUtil', value: 4130 },
        { name: 'Sum', value: 791 },
        { name: 'Variable', value: 1124 },
        { name: 'Variance', value: 1876 },
        { name: 'Xor', value: 1101 },
      ],
    },
    {
      name: 'scale',
      children: [
        { name: 'IScaleMap', value: 2105 },
        { name: 'LinearScale', value: 1316 },
        { name: 'LogScale', value: 3151 },
        { name: 'OrdinalScale', value: 3770 },
        { name: 'QuantileScale', value: 2435 },
        { name: 'QuantitativeScale', value: 4839 },
        { name: 'RootScale', value: 1756 },
        { name: 'Scale', value: 4268 },
        { name: 'ScaleType', value: 1821 },
        { name: 'TimeScale', value: 5833 },
      ],
    },
    {
      name: 'util',
      children: [
        { name: 'Arrays', value: 8258 },
        { name: 'Colors', value: 10001 },
        { name: 'Dates', value: 8217 },
        { name: 'Displays', value: 12555 },
        { name: 'Filter', value: 2324 },
        { name: 'Geometry', value: 10993 },
        {
          name: 'heap',
          children: [
            { name: 'FibonacciHeap', value: 9354 },
            { name: 'HeapNode', value: 1233 },
          ],
        },
        { name: 'IEvaluable', value: 335 },
        { name: 'IPredicate', value: 383 },
        { name: 'IValueProxy', value: 874 },
        {
          name: 'math',
          children: [
            { name: 'DenseMatrix', value: 3165 },
            { name: 'IMatrix', value: 2815 },
            { name: 'SparseMatrix', value: 3366 },
          ],
        },
        { name: 'Maths', value: 17705 },
        { name: 'Orientation', value: 1486 },
        {
          name: 'palette',
          children: [
            { name: 'ColorPalette', value: 6367 },
            { name: 'Palette', value: 1229 },
            { name: 'ShapePalette', value: 2059 },
            { name: 'SizePalette', value: 2291 },
          ],
        },
        { name: 'Property', value: 5559 },
        { name: 'Shapes', value: 19118 },
        { name: 'Sort', value: 6887 },
        { name: 'Stats', value: 6557 },
        { name: 'Strings', value: 22026 },
      ],
    },
    {
      name: 'vis',
      children: [
        {
          name: 'axis',
          children: [
            { name: 'Axes', value: 1302 },
            { name: 'Axis', value: 24593 },
            { name: 'AxisGridLine', value: 652 },
            { name: 'AxisLabel', value: 636 },
            { name: 'CartesianAxes', value: 6703 },
          ],
        },
        {
          name: 'controls',
          children: [
            { name: 'AnchorControl', value: 2138 },
            { name: 'ClickControl', value: 3824 },
            { name: 'Control', value: 1353 },
            { name: 'ControlList', value: 4665 },
            { name: 'DragControl', value: 2649 },
            { name: 'ExpandControl', value: 2832 },
            { name: 'HoverControl', value: 4896 },
            { name: 'IControl', value: 763 },
            { name: 'PanZoomControl', value: 5222 },
            { name: 'SelectionControl', value: 7862 },
            { name: 'TooltipControl', value: 8435 },
          ],
        },
        {
          name: 'data',
          children: [
            { name: 'Data', value: 20544 },
            { name: 'DataList', value: 19788 },
            { name: 'DataSprite', value: 10349 },
            { name: 'EdgeSprite', value: 3301 },
            { name: 'NodeSprite', value: 19382 },
            {
              name: 'render',
              children: [
                { name: 'ArrowType', value: 698 },
                { name: 'EdgeRenderer', value: 5569 },
                { name: 'IRenderer', value: 353 },
                { name: 'ShapeRenderer', value: 2247 },
              ],
            },
            { name: 'ScaleBinding', value: 11275 },
            { name: 'Tree', value: 7147 },
            { name: 'TreeBuilder', value: 9930 },
          ],
        },
        {
          name: 'events',
          children: [
            { name: 'DataEvent', value: 2313 },
            { name: 'SelectionEvent', value: 1880 },
            { name: 'TooltipEvent', value: 1701 },
            { name: 'VisualizationEvent', value: 1117 },
          ],
        },
        {
          name: 'legend',
          children: [
            { name: 'Legend', value: 20859 },
            { name: 'LegendItem', value: 4614 },
            { name: 'LegendRange', value: 10530 },
          ],
        },
        {
          name: 'operator',
          children: [
            {
              name: 'distortion',
              children: [
                { name: 'BifocalDistortion', value: 4461 },
                { name: 'Distortion', value: 6314 },
                { name: 'FisheyeDistortion', value: 3444 },
              ],
            },
            {
              name: 'encoder',
              children: [
                { name: 'ColorEncoder', value: 3179 },
                { name: 'Encoder', value: 4060 },
                { name: 'PropertyEncoder', value: 4138 },
                { name: 'ShapeEncoder', value: 1690 },
                { name: 'SizeEncoder', value: 1830 },
              ],
            },
            {
              name: 'filter',
              children: [
                { name: 'FisheyeTreeFilter', value: 5219 },
                { name: 'GraphDistanceFilter', value: 3165 },
                { name: 'VisibilityFilter', value: 3509 },
              ],
            },
            { name: 'IOperator', value: 1286 },
            {
              name: 'label',
              children: [
                { name: 'Labeler', value: 9956 },
                { name: 'RadialLabeler', value: 3899 },
                { name: 'StackedAreaLabeler', value: 3202 },
              ],
            },
            {
              name: 'layout',
              children: [
                { name: 'AxisLayout', value: 6725 },
                { name: 'BundledEdgeRouter', value: 3727 },
                { name: 'CircleLayout', value: 9317 },
                { name: 'CirclePackingLayout', value: 12003 },
                { name: 'DendrogramLayout', value: 4853 },
                { name: 'ForceDirectedLayout', value: 8411 },
                { name: 'IcicleTreeLayout', value: 4864 },
                { name: 'IndentedTreeLayout', value: 3174 },
                { name: 'Layout', value: 7881 },
                { name: 'NodeLinkTreeLayout', value: 12870 },
                { name: 'PieLayout', value: 2728 },
                { name: 'RadialTreeLayout', value: 12348 },
                { name: 'RandomLayout', value: 870 },
                { name: 'StackedAreaLayout', value: 9121 },
                { name: 'TreeMapLayout', value: 9191 },
              ],
            },
            { name: 'Operator', value: 2490 },
            { name: 'OperatorList', value: 5248 },
            { name: 'OperatorSequence', value: 4190 },
            { name: 'OperatorSwitch', value: 2581 },
            { name: 'SortOperator', value: 2023 },
          ],
        },
        { name: 'Visualization', value: 16540 },
      ],
    },
  ],
};
