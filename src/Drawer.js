import React from 'react';
import Drawer from 'material-ui/Drawer';

import CardExampleExpandable from './Card';

class MyDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  render() {
    return (
      <div>
        <Drawer
          docked={true}
          width={300}
          open={this.state.open}>
            <h1>Menu Title</h1>
            <CardExampleExpandable />
        </Drawer>
      </div>
    );
  }
}

export default MyDrawer;
