import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Drawer from '../Drawer';

class DrawerApp extends React.Component {
  state={
    nibWidth: 'this.state.nibWidth',
  }

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.nibWidth });
  };

  render() {
    return (
      <Drawer
        onChange={this.handleChange('nibWidth')}
        nibWidth={this.state.nibWidth}
      />
    );
  }
}


storiesOf('Drawer', module)
  .add('initial setup', () => (
    <DrawerApp />
  ));
