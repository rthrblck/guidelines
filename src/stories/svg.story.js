import React from 'react';

import { storiesOf } from '@storybook/react';

import SVG from '../svg';

class MySVG extends React.Component {
  render() {
    return (
      <SVG />
    );
  }
}

storiesOf('svg', module)
  .add('initial setup', () => (
    <MySVG />
  ));
