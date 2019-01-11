import React from 'react';

const SVG = props => (
  <svg width="215.9mm" height="279.4mm">
    {props.lineArray.map(line =>
      <line {...line} />)}
  </svg>
);

export default SVG;
