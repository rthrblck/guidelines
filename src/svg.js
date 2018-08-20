import React from 'react';

const SVG = props => (
  <svg width="1000" height="1000">

    <g stroke="black" >
      <line
        x1="0"
        y1="10"
        x2="800"
        y2="10"
        strokeWidth="1"
      />

      <line
        x1="10"
        y1="0"
        x2="10"
        y2="800"
        strokeWidth="1"
      />

      <line
        x1="0"
        y1="0"
        x2="800"
        y2="800"
        strokeWidth="1"
      />
    </g>

  </svg>
);

export default SVG;
