import React from 'react';
import PropTypes from 'prop-types';

const SVG = props => (
  <svg width={props.pW} height={props.pH}>

    <defs>
      <clipPath id="margins">
        <rect
          x={props.lM}
          y={props.tM}
          width={props.pW - (props.lM + props.rM)}
          height={props.pH - (props.tM + props.bM)}
        />
      </clipPath>
    </defs>

    <g clipPath="url(#margins)">

      {props.lineArray.map((line, index) =>
        (<line key={`line${index}`} {...line} />))}
    </g>

    <rect
      x={0}
      y={0}
      width={props.pW}
      height={props.pH}
      fill="none"
      stroke="gray"
    />

  </svg>
);

SVG.propTypes = {
  lineArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  pW: PropTypes.number.isRequired,
  pH: PropTypes.number.isRequired,
  lM: PropTypes.number.isRequired,
  tM: PropTypes.number.isRequired,
  rM: PropTypes.number.isRequired,
  bM: PropTypes.number.isRequired,
};

export default SVG;
