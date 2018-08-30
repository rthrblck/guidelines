import React from 'react';

const SVG = props => (
  <svg width="100%" height="1000">
    {props.lineArray.map(line =>
      <line {...line} />)}
  </svg>
);

export default SVG;
