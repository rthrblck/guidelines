import React from 'react';

import { storiesOf } from '@storybook/react';

import SVG from '../svg';

const lineArray = [
  {
    x1: '10',
    y1: '0',
    x2: '10',
    y2: '1000',
    strokeWidth: '1',
    stroke: 'gray',
    transform: 'rotate(10, 10, 0)',
  },
  {
    x1: '30',
    y1: '0',
    x2: '30',
    y2: '1000',
    strokeWidth: '1',
    stroke: 'gray',
    transform: 'rotate(10, 10, 0)',
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
  .add('initial setup', () => (
    <SVG
      lineArray={lineArray}
    />
  ));
