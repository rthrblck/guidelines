import React from 'react';

import { storiesOf } from '@storybook/react';

import MyCheckbox from '../Checkbox';

storiesOf('Checkbox', module)
  .add('initial setup', () => (
    <MyCheckbox />
  ));
