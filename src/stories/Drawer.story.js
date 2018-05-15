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

    this.handleNibWidthChange = this.handleNibWidthChange.bind(this);
    this.handleXHeightChange = this.handleXHeightChange.bind(this);
  }

  handleNibWidthChange(event) {
    this.setState({ nibWidth: event.target.value });
  }

  handleXHeightChange(event) {
    console.log(event);
    this.setState({ xHeight: event.target.value });
  }

  render() {
    return (
      <Drawer
        nibWidth={this.state.nibWidth}
        handleNibWidthChange={this.handleNibWidthChange}
        xHeight={this.state.xHeight}
        handleXHeightChange={this.handleXHeightChange}
      />
    );
  }
}


storiesOf('Drawer', module)
  .add('initial setup', () => (
    <DrawerApp />
  ));
