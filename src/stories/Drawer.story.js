import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Drawer from '../Drawer';

class DrawerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nibWidth: 7,
      xHeight: 5,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange uses input id as state key,
  // so keep input ids consistent with state variable names

  handleChange(event) {
    const name = event.target.id;
    this.setState({ [name]: event.target.value });
  }

  render() {
    return (
      <Drawer
        {...this.state}
        handleChange={this.handleChange}
      />
    );
  }
}


storiesOf('Drawer', module)
  .add('initial setup', () => (
    <DrawerApp />
  ));
