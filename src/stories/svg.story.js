import React from 'react';

import { storiesOf } from '@storybook/react';

import SVG from '../svg';
import { svgPropsBlackLetter, appStateBlackLetter } from '../fixtures';
import lineGroup from '../drawLine';

const lineArray = lineGroup(appStateBlackLetter);
const svgProps = Object.assign({ lineArray }, appStateBlackLetter);


storiesOf('svg', module)
  .add('BlackLetter', () => (
    <SVG
      {...svgProps}
    />
  ));
