import React from 'react';

const SVG = props => (
  <svg width="100%" height="1000">
    <line
      x1="0"
      y1="10"
      x2="1000"
      y2="10"
      strokeWidth="1"
      stroke="black"
    />
    <line
      x1="0"
      y1="30"
      x2="1000"
      y2="30"
      strokeWidth="1"
      stroke="black"
    />
    <line
      x1="0"
      y1="70"
      x2="1000"
      y2="70"
      strokeWidth="1"
      stroke="black"
    />
    <line
      x1="0"
      y1="90"
      x2="1000"
      y2="90"
      strokeWidth="1"
      stroke="black"
    />
  </svg>
);

export default SVG;

// {props.lineArray.map(line =>
//   <line {...line} />)}
