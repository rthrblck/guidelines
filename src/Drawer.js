import React from 'react';

import MuiDrawer from 'material-ui/Drawer';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const Drawer = props => (
  <MuiDrawer
    variant="permanent"
  >
    <div />
    <Card>
      <CardContent>
        <Typography>Card Label</Typography>
        <TextField
          id="number"
          label="Nib Width"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
      </CardContent>
      <CardActions>
        <Button size="large">Button</Button>
      </CardActions>
    </Card>
  </MuiDrawer>
);

export default Drawer;
