import React from 'react';
import PropTypes from 'prop-types';

class SVG extends React.Component {
  render() {
    return (
      <svg
        width={`${this.props.pW}mm`}
        height={`${this.props.pH}mm`}
        viewBox={`0 0 ${this.props.pW} ${this.props.pH}`}
      >

        <defs>
          <clipPath id="margins">
            <rect
              x={this.props.lM}
              y={this.props.tM}
              width={this.props.pW - (this.props.lM + this.props.rM)}
              height={this.props.pH - (this.props.tM + this.props.bM)}
            />
          </clipPath>
        </defs>

        <g clipPath="url(#margins)">

          {this.props.lineArray.map((line, index) =>
            (<line key={`line${index}`} {...line} />))}
        </g>

        <rect
          x={0}
          y={0}
          width={this.props.pW}
          height={this.props.pH}
          fill="none"
          stroke="gray"
        />

      </svg>
    );
  }
}

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
