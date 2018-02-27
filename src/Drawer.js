import React from 'react';

import MuiDrawer from 'material-ui/Drawer';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const Drawer = props => (
  <MuiDrawer
    variant="permanent"
  >
    <div />
    <Card>
      <CardContent>
        <Typography>Butts</Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Clickity clack</Button>
      </CardActions>
    </Card>
  </MuiDrawer>
);

export default Drawer;
