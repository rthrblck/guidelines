import React from 'react';

import MuiDrawer from 'material-ui/Drawer';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';

// TextField imports
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

// InputAdornment imports
import { InputAdornment } from 'material-ui/Input';

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
          label="number"
          name="number"
          type="number"
          margin="normal"
          helperText="This is some helper text"
          // value={props.defaultNum}
          InputProps={{
            endAdornment: <InputAdornment position="end">mm</InputAdornment>,
          }}
          inputProps={{
            step: '0.1',
          }}
        />
      </CardContent>
      <CardActions>
        <Button size="large">Button</Button>
      </CardActions>
    </Card>
  </MuiDrawer>
);

export default Drawer;

// TODO: Group multiple textFields on Card
// TODO: Group multiple Cards in Drawer
