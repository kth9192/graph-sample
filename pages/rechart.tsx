import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
  LineChart,
  Line,
  ComposedChart,
  Area,
  RadarChart,
  Radar,
  PolarRadiusAxis,
  PolarAngleAxis,
  PolarGrid,
  Scatter,
} from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import { dataSets, radarTestSet } from '../shared/resource';

function Rechart() {
  const [datas, setdatas] = useState(dataSets);
  const [radarDatas, setRadarDatas] = useState(radarTestSet);

  const [clickKey, setClickKey] = useState('');

  useEffect(() => {
    setdatas(dataSets);
    setRadarDatas(radarTestSet);
  }, [dataSets]);

  const handleClick = (data: string) => {
    setClickKey(data);
  };

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white rounded shadow p-4">
          <p className="mb-2 font-bold ">{label}</p>
          <p
            style={{ color: payload[0].color }}
          >{`전체 : ${payload[0].payload.total}건`}</p>
          <p
            style={{ color: payload[1].color }}
          >{`평균 : ${payload[0].payload.avg}건`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="grid grid-cols-2 gap-4 flex-col w-full h-screen">
      <div className="flex flex-col w-fit">
        <h2 className="mx-auto">다중 바</h2>
        <ResponsiveContainer width={800} height={300}>
          <BarChart height={300} data={datas}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 11 }}
              interval={0}
              axisLine={false}
              tickLine={false}
            />
            <YAxis />
            <Tooltip content={CustomTooltip} />
            <Legend
              align="center"
              formatter={(props) => (
                <span className="text-xs font-medium">
                  {props === 'avg' ? '평균' : '전체'}
                </span>
              )}
            />

            <Bar dataKey="avg" fill="#3366f6" />
            <Bar dataKey="total" fill="#ffc871" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col w-fit">
        <h2 className="mx-auto">다중 바 겹치기</h2>
        <ResponsiveContainer width={800} height={300}>
          <BarChart height={300} data={datas} barGap={-10}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 11 }}
              interval={0}
              axisLine={false}
              tickLine={false}
            />
            <YAxis />
            <Tooltip content={CustomTooltip} />
            <Legend
              align="center"
              formatter={(props) => (
                <span className="text-xs font-medium">
                  {props === 'avg' ? '평균' : '전체'}
                </span>
              )}
            />

            <Bar dataKey="avg" fill="#3366f6" />
            <Bar dataKey="total" fill="#ffc871" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col w-fit">
        <h2 className="mx-auto">다중 라인</h2>
        <ResponsiveContainer width={800} height={300}>
          <LineChart height={300} data={datas} barGap={-10}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 11 }}
              interval={0}
              axisLine={false}
              tickLine={false}
            />
            <YAxis />
            <Tooltip content={CustomTooltip} />
            <Legend
              align="center"
              formatter={(props) => (
                <span className="text-xs font-medium">
                  {props === 'avg' ? '평균' : '전체'}
                </span>
              )}
            />

            <Line type="monotone" dataKey="avg" stroke="#3366f6" />
            <Line type="monotone" dataKey="total" stroke="#ffc871" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col w-fit">
        <h2 className="mx-auto">라인 + 영역 + 그라디언트</h2>
        <ResponsiveContainer width={800} height={300}>
          <ComposedChart height={300} data={datas} barGap={-10}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 11 }}
              interval={0}
              axisLine={false}
              tickLine={false}
            />
            <YAxis />
            <Tooltip content={CustomTooltip} />
            <Legend
              align="center"
              formatter={(props) => (
                <span className="text-xs font-medium">
                  {props === 'avg' ? '평균' : '전체'}
                </span>
              )}
            />

            <defs>
              <linearGradient id="test" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffc871" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ffc871" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Line type="monotone" dataKey="avg" stroke="#3366f6" />
            <Area
              type="monotone"
              dataKey="total"
              fill="url(#test)"
              stroke="#ffc871"
              opacity={50}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col w-fit">
        <h2 className="mx-auto">스택바</h2>
        <ResponsiveContainer width={800} height={300}>
          <BarChart height={300} data={datas} barGap={-10}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 11 }}
              interval={0}
              axisLine={false}
              tickLine={false}
            />
            <YAxis />
            <Tooltip content={CustomTooltip} />
            <Legend
              align="center"
              formatter={(props) => (
                <span className="text-xs font-medium">
                  {props === 'avg' ? '평균' : '전체'}
                </span>
              )}
            />

            <Bar dataKey="avg" stackId="a" fill="#8884d8" />
            <Bar dataKey="total" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col w-fit">
        <h2 className="mx-auto">레이더</h2>
        <ResponsiveContainer width={800} height={300}>
          <RadarChart height={300} data={radarDatas} barGap={-10}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Tooltip />
            <Legend align="center" />
            <defs>
              <linearGradient id="test" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffc871" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ffc871" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="test2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3366f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3366f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Radar
              name="친구1"
              dataKey="A"
              stroke="#ffc871"
              fill="url(#test)"
              fillOpacity={0.6}
            />
            <Radar
              name="친구2"
              dataKey="B"
              stroke="#3366f6"
              fill="url(#test2)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col w-fit">
        <h2 className="mx-auto">복합 차트</h2>
        <ResponsiveContainer width={800} height={300}>
          <ComposedChart
            width={500}
            height={400}
            data={dataSets}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="label" scale="band" />
            <YAxis />
            <Tooltip content={CustomTooltip} />
            <Legend />
            <Bar dataKey="total" barSize={20} fill="#413ea0" />
            <Area
              type="monotone"
              dataKey="avg"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Scatter dataKey="cnt" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col w-fit">
        <h2 className="mx-auto">도트 클릭</h2>
        <ResponsiveContainer width={800} height={300}>
          <ComposedChart height={300} data={datas} barGap={-10}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 11 }}
              interval={0}
              axisLine={false}
              tickLine={false}
            />
            <YAxis />
            <Tooltip content={CustomTooltip} />
            <Legend
              align="center"
              formatter={(props) => (
                <span className="text-xs font-medium">
                  {props === 'avg' ? '평균' : '전체'}
                </span>
              )}
            />

            {clickKey === 'avg' ? (
              <Area
                type="monotone"
                dataKey="avg"
                fill="#ffc871"
                stroke="#ffc871"
                activeDot={{
                  onClick: (event, payload: any) => handleClick(''),
                }}
              />
            ) : (
              <Line
                type="monotone"
                dataKey="avg"
                stroke="#ffc871"
                activeDot={{
                  onClick: (event, payload: any) =>
                    handleClick(payload.dataKey),
                }}
              />
            )}
            {clickKey === 'total' ? (
              <Area
                type="monotone"
                dataKey="total"
                fill="#3366f6"
                stroke="#3366f6"
                activeDot={{
                  onClick: (event, payload: any) => handleClick(''),
                }}
              />
            ) : (
              <Line
                type="monotone"
                dataKey="total"
                stroke="#3366f6"
                activeDot={{
                  onClick: (event, payload: any) =>
                    handleClick(payload.dataKey),
                }}
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Rechart;
