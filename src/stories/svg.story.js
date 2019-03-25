import React from 'react';

import { storiesOf } from '@storybook/react';

import SVG from '../svg';
import { svgPropsBlackLetter } from '../fixtures';

storiesOf('svg', module)
  .add('BlackLetter', () => (
    <SVG {...svgPropsBlackLetter} />
  ));
// .add('BlackLetter as blue', () => {
//   const blues = Object.assign({}, svgPropsBlackLetter);
//   for (let i = 0; i < blues.lineArray.length; i += 1) {
//     blues.lineArray[i].stroke = 'blue';
//   }
//   return (<SVG {...blues} />);
// });
