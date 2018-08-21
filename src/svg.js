import React from 'react';

const SVG = props => (
  <svg width="1000" height="1000">

    <g stroke="black" >

      {/* Horizontal lines */}

      <line
        x1="0"
        y1="10"
        x2="800"
        y2="10"
        strokeWidth="1"
      />

      <line
        x1="0"
        y1="15"
        x2="800"
        y2="15"
        strokeDasharray="5,5"
        strokeWidth="1"
      />

      <line
        x1="0"
        y1="20"
        x2="800"
        y2="20"
        strokeWidth="1"
      />

      <line
        x1="0"
        y1="60"
        x2="800"
        y2="60"
        strokeWidth="1"
      />

      <line
        x1="0"
        y1="70"
        x2="800"
        y2="70"
        strokeWidth="1"
      />

      {/* Diagonal lines */}
      <g stroke="red" >

        <line
          x1="50"
          y1="0"
          x2="50"
          y2="1000"
          strokeWidth="1"
          transform="rotate(60,50,0)"
        />

        <line
          x1="100"
          y1="0"
          x2="100"
          y2="1000"
          strokeWidth="1"
          transform="rotate(60,100,0)"
        />

        <line
          x1="150"
          y1="0"
          x2="150"
          y2="1000"
          strokeWidth="1"
          transform="rotate(60,150,0)"
        />

      </g>

      {/* Vertical lines */}
      <g stroke="lightgray" >

        <line
          x1="50"
          y1="0"
          x2="50"
          y2="800"
          strokeWidth="1"
        />

        <line
          x1="100"
          y1="0"
          x2="100"
          y2="800"
          strokeWidth="1"
        />

        <line
          x1="150"
          y1="0"
          x2="150"
          y2="800"
          strokeWidth="1"
        />

      </g>

    </g>

  </svg>
);

export default SVG;
