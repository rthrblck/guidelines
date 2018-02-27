import React from 'react';

import MuiDrawer from 'material-ui/Drawer';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';


const Drawer = props => (
  <MuiDrawer
    variant="permanent"
  >
    <div />
    <Card>
      <CardContent>
        <Typography>Butts</Typography>
      </CardContent>
    </Card>
  </MuiDrawer>
);

export default Drawer;
