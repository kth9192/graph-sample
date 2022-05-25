import dynamic from 'next/dynamic';
import React from 'react';

const DendrogramChart = dynamic(() => import('../components/dendrogramChart'), {
  ssr: false,
});

function Dendrogram() {
  return (
    <div>
      <DendrogramChart />
    </div>
  );
}

export default Dendrogram;
