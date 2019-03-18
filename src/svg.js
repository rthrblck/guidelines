import React from 'react';

const SVG = props => (
  <svg width="8500" height="1100">
    {props.lineArray.map(line =>
      <line {...line} />)}
  </svg>
);

export default SVG;
