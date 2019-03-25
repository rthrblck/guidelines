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

  </svg>
);

SVG.propTypes = {
  pageSettings: PropTypes.objectOf(PropTypes.number).isRequired,
  lineArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SVG;
