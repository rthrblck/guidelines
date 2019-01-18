import React from 'react';

import { storiesOf } from '@storybook/react';

import SVG from '../svg';

// const lineArray = [
//   {
//     x1: '50',
//     y1: '0',
//     x2: '50',
//     y2: '1000',
//     strokeWidth: '1',
//     stroke: 'red',
//     transform: 'rotate(60,50,0)',
//   },
//   {
//     x1: '100',
//     y1: '0',
//     x2: '100',
//     y2: '1000',
//     strokeWidth: '1',
//     stroke: 'red',
//     transform: 'rotate(60,100,0)',
//   },
//   {
//     x1: '150',
//     y1: '0',
//     x2: '150',
//     y2: '1000',
//     strokeWidth: '1',
//     stroke: 'red',
//     transform: 'rotate(60,150,0)',
//   },
// ];

// Not sure how to structure this function for clean prop passing. Maybe it needs a `this` binding?
// lineArray.map(line =>
//   <line {...line} />);

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
    <SVG />
  ));
