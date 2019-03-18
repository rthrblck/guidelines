import React from 'react';

import { storiesOf } from '@storybook/react';

import SVG from '../svg';

const lineArray = [
  {
    x1: '0',
    y1: '10',
    x2: '1000',
    y2: '10',
    strokeWidth: '1',
    stroke: 'black',
  },
  {
    x1: '0',
    y1: '30',
    x2: '1000',
    y2: '30',
    strokeWidth: '1',
    stroke: 'black',
  },
  {
    x1: '0',
    y1: '70',
    x2: '1000',
    y2: '70',
    strokeWidth: '1',
    stroke: 'black',
  },
  {
    x1: '0',
    y1: '90',
    x2: '1000',
    y2: '90',
    strokeWidth: '1',
    stroke: 'black',
  },
];

class MySVG extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SVG />
    );
  }
}

storiesOf('svg', module)
  .add('default horiz lines', () => (
    <SVG
      lineArray={lineArray}
    />
  ));
