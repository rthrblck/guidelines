import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Drawer from '../Drawer';

class DrawerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nibWidth: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ nibWidth: event.target.nibWidth });
  }

  render() {
    return (
      <Drawer />
    );
  }
}


storiesOf('Drawer', module)
  .add('initial setup', () => (
    <DrawerApp />
  ));
