import React from 'react';

import { storiesOf } from '@storybook/react';

import SVG from '../svg';
import { appStateBlackLetter } from '../fixtures';
import lineGroup from '../drawLine';

const lineArray = lineGroup(appStateBlackLetter);
const svgBlackLetter = Object.assign({ lineArray }, appStateBlackLetter);

storiesOf('svg', module)
  .add('BlackLetter', () => (
    <SVG
      {...svgBlackLetter}
    />
  ));
