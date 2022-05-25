import React, { useEffect, useRef, useState } from 'react';
import { ForceGraph2D } from 'react-force-graph';
import { forceCollide } from 'd3-force';
import dynamic from 'next/dynamic';
import { useRecoilState } from 'recoil';
import {
  ChartData,
  DendrogramLink,
  DendrogramNode,
  dendrogramState,
} from '../shared/store';
import { csvParse } from 'd3-dsv';

const useForceUpdate = () => {
  const setToggle = useState(false)[1];
  return () => setToggle((b) => !b);
};

function DendrogramChart() {
  const forceUpdate = useForceUpdate();
  const [dendrogramInfo, setDendrogramInfo] = useState<ChartData>();

  const canvasRef = useRef<any>(null);

  const createCircle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    val: number,
  ) => {
    ctx.beginPath();
    ctx.arc(x, y, val, 0, 2 * Math.PI, false);
    ctx.fill();
  };

  const createText = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    name: string,
  ) => {
    ctx.font = '10px Sans-Serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name, x, y);
  };

  const nodePaint = (
    { path, leaf, module, size, level, vx, vy }: DendrogramNode,
    color: string,
    ctx: CanvasRenderingContext2D,
    globalScale?: number,
  ) => {
    ctx.fillStyle = color;

    console.log('tsets', path, leaf, module, size, level);

    createCircle(ctx, vx ?? 0, vy ?? 0, size ?? 0);
    createText(ctx, vx ?? 0, vy ?? 0 + 20, path);
  };

  useEffect(() => {
    (async () => {
      const test = await fetch('/d3-dependencies.csv')
        .then((r) => r.text())
        .then((res) => csvParse(res))
        .then((data) => {
          const nodes: DendrogramNode[] = [];
          const links: DendrogramLink[] = [];
          data.forEach(({ size, path }: any) => {
            const levels = path?.split('/'),
              level = levels?.length - 1,
              module = level > 0 ? levels[1] : null,
              leaf = levels?.pop(),
              parent = levels?.join('/');

            const node = {
              path,
              leaf,
              module,
              size: +size || 20,
              level,
            };

            nodes.push(node);

            if (parent) {
              links.push({
                source: parent,
                target: path,
                targetNode: node,
              });
            }
          });

          return { nodes, links };
        });

      console.log(test);
      setDendrogramInfo(Object.assign({}, test));
    })();

    // add collision force
    canvasRef?.current?.d3Force(
      'collision',
      forceCollide((node) => {
        console.log(node);

        return Math.sqrt(100 / (node.vx ?? 0 + 1));
      }),
    );
  }, []);

  useEffect(() => {
    console.log(dendrogramInfo);
  }, [dendrogramInfo]);

  return (
    <>
      {dendrogramInfo ? (
        <ForceGraph2D
          ref={canvasRef}
          width={1000}
          height={500}
          graphData={dendrogramInfo}
          dagMode={'radialout'}
          //   dagLevelDistance={300}
          //   backgroundColor="#101020"
          linkColor={() => '#72777E'}
          nodeRelSize={1}
          nodeId="path"
          //   nodeCanvasObject={(
          //     node: any,
          //     ctx: CanvasRenderingContext2D,
          //     globalScale: number,
          //   ) => nodePaint(node, '#B7CAFF', ctx, globalScale)}
          nodeVal={(node: any) => 100 / (node.level + 1)}
          nodeLabel="path"
          nodeAutoColorBy="module"
          d3VelocityDecay={0.3}
          //   linkDirectionalArrowLength={0.1}
        />
      ) : (
        <div></div>
      )}
    </>
  );
}

export default DendrogramChart;
