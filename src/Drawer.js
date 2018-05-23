import React from 'react';

import MuiDrawer from '@material-ui/core/Drawer';
import Card, { CardContent } from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';

// TextField imports
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

// InputAdornment imports
import { InputAdornment } from '@material-ui/core/Input';

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
            id="nibWidth"
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
            value={props.nibWidth}
            onChange={props.handleChange}

          />
        </div>

        <div>
          {/* X-height */}
          <TextField
            id="xHeight"
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
            value={props.xHeight}
            onChange={props.handleChange}
          />
        </div>

        <div>
          {/* Ascender height */}
          <TextField
            id="aHeight"
            label="Ascender height"
            type="number"
            margin="normal"
            helperText="The distance between the x-height and the ascender line in nib widths"
            style={{ width: 200 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">nib&nbsp;widths</InputAdornment>,
            }}
            inputProps={{
              step: '0.1',
            }}
            value={props.aHeight}
            onChange={props.handleChange}
          />
        </div>

        <div>
          {/* Descender height */}
          <TextField
            id="dHeight"
            label="Descender height"
            type="number"
            margin="normal"
            helperText="The distance between the baseline and the descender line in nib widths"
            style={{ width: 200 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">nib&nbsp;widths</InputAdornment>,
            }}
            inputProps={{
              step: '0.1',
            }}
            value={props.dHeight}
            onChange={props.handleChange}
          />
        </div>

        <div>
          {/* Capital letter height */}
          <TextField
            id="cHeight"
            label="Capital letter height"
            type="number"
            margin="normal"
            helperText="The distance between the baseline and the capital letter line in nib widths"
            style={{ width: 200 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">nib&nbsp;widths</InputAdornment>,
            }}
            inputProps={{
              step: '0.1',
            }}
            value={props.cHeight}
            onChange={props.handleChange}
          />
        </div>

        <div>
          {/* Branching line */}
          <TextField
            id="bHeight"
            label="Branching-line height"
            type="number"
            margin="normal"
            helperText="The distance between the baseline and the branching-line for Italic, in nib widths"
            style={{ width: 200 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">nib&nbsp;widths</InputAdornment>,
            }}
            inputProps={{
              step: '0.1',
            }}
            value={props.bHeight}
            onChange={props.handleChange}
          />
        </div>

        <div>
          {/* Interlinear spacing */}
          <TextField
            id="iSpace"
            label="Interlinear spacing"
            type="number"
            margin="normal"
            helperText="The distance between the descender line of one row and the ascender line of the row below it, in nib widths"
            style={{ width: 200 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">nib&nbsp;widths</InputAdornment>,
            }}
            inputProps={{
              step: '0.1',
            }}
            value={props.iSpace}
            onChange={props.handleChange}
          />
        </div>

      </CardContent>
    </Card>

    <Card>
      <CardContent>
        <Typography>Verticality and pen angle</Typography>

        <div>
          {/* Verticality of letters */}
          <TextField
            id="vert"
            label="Verticality of letters"
            type="number"
            margin="normal"
            helperText="The angle of the vertical strokes of the letters, in degrees"
            style={{ width: 200 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">degrees</InputAdornment>,
            }}
            inputProps={{
              step: '1',
            }}
            value={props.vert}
            onChange={props.handleChange}
          />
        </div>

        <div>
          {/* Distance between verticals */}
          <TextField
            id="vertSpace"
            label="Distance between verticals"
            type="number"
            margin="normal"
            helperText="The distance between the lines showing the angle of vertical strokes, in millimeters"
            style={{ width: 200 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
            inputProps={{
              step: '1',
            }}
            value={props.vertSpace}
            onChange={props.handleChange}
          />
        </div>

        <div>
          {/* Pen angle */}
          <TextField
            id="penAngle"
            label="Pen angle"
            type="number"
            margin="normal"
            helperText="The angle of the flat edge of the nib in relation to the horzizontal lines, in degrees"
            style={{ width: 200 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">degrees</InputAdornment>,
            }}
            inputProps={{
              step: '1',
            }}
            value={props.penAngle}
            onChange={props.handleChange}
          />
        </div>

      </CardContent>
    </Card>

    <Card>
      <CardContent>
        <Typography>Verticality and pen angle</Typography>

      </CardContent>
    </Card>

  </MuiDrawer>
);

export default Drawer;

// TODO: Add checkboxes for margin indicators for x-height and nib width
// ladders to Fundamental Guidelines Card
// TODO: Add Paper Options card
