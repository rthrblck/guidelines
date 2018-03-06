import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Drawer from '../Drawer';

storiesOf('Drawer', module)
  .add('initial setup', () => (
    <Drawer
      defaultNum={3}
    />
  ));
