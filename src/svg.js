import React from 'react';

const state = {
  pW: 600,
  pH: 800,
  lM: 10,
  rM: 10,
  tM: 0,
  bM: 10,
};

const lineArray = [
  {
    x1: '0',
    y1: '10',
    x2: '1000',
    y2: '10',
    strokeWidth: '1',
    stroke: 'black',
  },
  {
    x1: '0',
    y1: '30',
    x2: '1000',
    y2: '30',
    strokeWidth: '1',
    stroke: 'black',
  },
  {
    x1: '0',
    y1: '70',
    x2: '1000',
    y2: '70',
    strokeWidth: '1',
    stroke: 'black',
  },
  {
    x1: '0',
    y1: '90',
    x2: '1000',
    y2: '90',
    strokeWidth: '1',
    stroke: 'black',
  },
];

const SVG = props => (
  <svg width={state.pW} height={state.pH}>

    <defs>
      <clipPath id="margins">
        <rect
          x={state.lM}
          y={state.tM}
          width={state.pW - (state.lM + state.rM)}
          height={state.pH - (state.tM + state.bM)}
        />
      </clipPath>
    </defs>

    <g clipPath="url(#margins)">
      {lineArray.map(line =>
        (<line
          {...line}
          stroke="red"
        />))}
    </g>

    <rect
      x={state.lM}
      y={state.tM}
      width={state.pW - (state.lM + state.rM)}
      height={state.pH - (state.tM + state.bM)}
      stroke="red"
      strokeWidth="1"
      fill="none"
    />

  </svg>
);

export default SVG;
