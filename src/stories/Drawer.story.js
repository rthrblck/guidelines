import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Drawer from '../Drawer';
//const Drawer = () => <div>FAKE DRAWER</div>;

const mock_state_of_app = {
  nib_size: 9,
  // ...
};


storiesOf('Drawer', module)
  .add('all of the things', () => (
    <div>
      <Drawer
        {...mock_state_of_app}
        onChange={action('mock onchange from the App')}
      />
    </div>
  ))
  ;
