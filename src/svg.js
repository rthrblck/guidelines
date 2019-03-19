import React from 'react';
import PropTypes from 'prop-types';

const SVG = props => (
  <svg width={props.pageSettings.pW} height={props.pageSettings.pH}>

    <defs>
      <clipPath id="margins">
        <rect
          x={props.pageSettings.lM}
          y={props.pageSettings.tM}
          width={props.pageSettings.pW - (props.pageSettings.lM + props.pageSettings.rM)}
          height={props.pageSettings.pH - (props.pageSettings.tM + props.pageSettings.bM)}
        />
      </clipPath>
    </defs>

    <g clipPath="url(#margins)">

      {props.lineArray.map(line =>
        (<line {...line} />))}
    </g>

    <rect
      x={props.pageSettings.lM}
      y={props.pageSettings.tM}
      width={props.pageSettings.pW - (props.pageSettings.lM + props.pageSettings.rM)}
      height={props.pageSettings.pH - (props.pageSettings.tM + props.pageSettings.bM)}
      stroke="red"
      strokeWidth="1"
      fill="none"
    />

  </svg>
);

SVG.propTypes = {
  pageSettings: PropTypes.object,
  lineArray: PropTypes.arrayOf(PropTypes.object),
};

export default SVG;
