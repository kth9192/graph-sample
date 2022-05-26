// import { ResponsiveBar } from '@nivo/bar';
import React from 'react';
import dynamic from 'next/dynamic';

const NivoChart = dynamic(() => import('../components/nivoChart'), {
  ssr: false,
});

function Nivo() {
  return <NivoChart />;
}

export default Nivo;
