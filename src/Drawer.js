import React from 'react';

import MuiDrawer from 'material-ui/Drawer';
import Card, { CardContent } from 'material-ui/Card';

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
        <Typography>Fundamental Lines</Typography>

        <div>
          {/* Nib Width */}
          <TextField
            id="Nib width"
            label="Nib width"
            type="number"
            margin="normal"
            helperText="The width of your nib in millimeters"
            style={{ width: 200 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
            inputProps={{
              step: '0.1',
              min: '0',
            }}

          />
        </div>

        <div>
          {/* X-height */}
          <TextField
            id="x-height"
            label="X-height"
            type="number"
            margin="normal"
            helperText="The distance between the baseline and the x-height in nib widths"
            style={{ width: 200 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">nib&nbsp;widths</InputAdornment>,
            }}
            inputProps={{
              step: '0.1',
            }}
          />
        </div>

      </CardContent>
    </Card>

    <Card>
      <CardContent>
        <Typography>Guideline indicators</Typography>

        {/* X indicator */}
        <div>
          {/* Add checkboxes with labels here */}
        </div>

      </CardContent>
    </Card>

  </MuiDrawer>
);

export default Drawer;

// TODO: Group multiple textFields on Card
// TODO: Group multiple Cards in Drawer
