import { atom } from 'recoil';
import { NodeObject } from 'force-graph';

export interface DendrogramNode extends NodeObject {
  leaf: string;
  level: number;
  module: string;
  path: string;
  size: number;
}

export interface DendrogramLink {
  source: string;
  target: string;
  targetNode: DendrogramNode;
}

export interface ChartData {
  nodes: DendrogramNode[];
  links: DendrogramLink[];
}

export const dendrogramState = atom<ChartData>({
  key: 'dendrogram',
  default: { nodes: [], links: [] } as ChartData,
});
