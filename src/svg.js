import React from 'react';

const lineArray = [
  {
    x1: '50',
    y1: '0',
    x2: '50',
    y2: '1000',
    strokeWidth: '1',
    stroke: 'red',
    transform: 'rotate(60,50,0)',
  },
];

const SVG = () => (
  <svg width="1000" height="1000">
    {lineArray.map(line =>
      <line {...line} />)}
  </svg>
);

export default SVG;
