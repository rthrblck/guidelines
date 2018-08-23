import React from 'react';

import { storiesOf } from '@storybook/react';

import SVG from '../svg';

const lineArray = [
  {
    x1: '50',
    y1: '0',
    x2: '50',
    y2: '1000',
    strokeWidth: '1',
    stroke: 'red',
    transform: 'rotate(60,50,0)',
  },
];

class MySVG extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Fundamental lines
      nibWidth: 3,
      xHeight: 5,
      aHeight: 5,
      dHeight: 5,
      cHeight: 4,
      bHeight: 0,
      iSpace: 1,
      // Verticality and pen angle
      vert: 60,
      vertSpace: 10,
      penAngle: 0,
    };
  }

  render() {
    return (
      <SVG
        lineArray={lineArray}
      />
    );
  }
}

storiesOf('svg', module)
  .add('initial setup', () => (
    <SVG />
  ));
