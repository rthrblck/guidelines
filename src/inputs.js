import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const Inputs = props => (
  <div>
    <Card>
      <CardContent>
        <Typography>Fundamental Lines</Typography>

        <div>
          {/* Nib Width */}
          <TextField
            id="nW"
            label="Nib width"
            type="number"
            margin="normal"
            helperText="The width of your broad edged nib in millimeters"
            InputProps={{
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
            inputProps={{
              step: '0.1',
              min: '0',
            }}
            value={props.nW}
            onChange={props.handleChange}

          />
        </div>

        <div>
          {/* X-height */}
          <TextField
            id="xH"
            label="X-height"
            type="number"
            margin="normal"
            helperText="The distance between the baseline and the x-height in nib widths"
            InputProps={{
              endAdornment: <InputAdornment position="end">nib&nbsp;widths</InputAdornment>,
            }}
            inputProps={{
              step: '0.25',
              min: '0',
            }}
            value={props.xH}
            onChange={props.handleChange}
          />
        </div>

        <div>
          {/* Ascender height */}
          <TextField
            id="aH"
            label="Ascender height"
            type="number"
            margin="normal"
            helperText="The distance between the x-height and the ascender line in nib widths"
            InputProps={{
              endAdornment: <InputAdornment position="end">nib&nbsp;widths</InputAdornment>,
            }}
            inputProps={{
              step: '0.25',
              min: '0',
            }}
            value={props.aH}
            onChange={props.handleChange}
          />
        </div>

        <div>
          {/* Descender height */}
          <TextField
            id="dH"
            label="Descender height"
            type="number"
            margin="normal"
            helperText="The distance between the baseline and the descender line in nib widths"
            InputProps={{
              endAdornment: <InputAdornment position="end">nib&nbsp;widths</InputAdornment>,
            }}
            inputProps={{
              step: '0.25',
              min: '0',
            }}
            value={props.dH}
            onChange={props.handleChange}
          />
        </div>

        <div>
          {/* Interlinear spacing */}
          <TextField
            id="iS"
            label="Interlinear spacing"
            type="number"
            margin="normal"
            helperText="The distance between the descender line of one row and the ascender line of the row below it, in nib widths"
            InputProps={{
              endAdornment: <InputAdornment position="end">nib&nbsp;widths</InputAdornment>,
            }}
            inputProps={{
              step: '0.25',
              min: '0',
            }}
            value={props.iS}
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
            id="vA"
            label="Verticality of letters"
            type="number"
            margin="normal"
            helperText="The angle of the vertical strokes of the letters, in degrees"
            InputProps={{
              endAdornment: <InputAdornment position="end">degrees</InputAdornment>,
            }}
            inputProps={{
              step: '1',
            }}
            value={props.vA}
            onChange={props.handleChange}
          />
        </div>

        <div>
          {/* Distance between verticals */}
          <TextField
            id="vS"
            label="Distance between verticals"
            type="number"
            margin="normal"
            helperText="The distance between the lines showing the angle of vertical strokes, in millimeters"
            InputProps={{
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
            inputProps={{
              step: '10',
              min: '10',
            }}
            value={props.vS}
            onChange={props.handleChange}
          />
        </div>

        <div>
          {/* Pen angle */}
          <TextField
            id="pA"
            label="Pen angle"
            type="number"
            margin="normal"
            helperText="The angle of the flat edge of the nib in relation to the horizontal lines, in degrees"
            InputProps={{
              endAdornment: <InputAdornment position="end">degrees</InputAdornment>,
            }}
            inputProps={{
              step: '1',
            }}
            value={props.pA}
            onChange={props.handleChange}
          />
        </div>

        <div>
          {/* Distance between pen angle lines */}
          <TextField
            id="pS"
            label="Distance between pen angle lines"
            type="number"
            margin="normal"
            helperText="The distance between the lines showing the pen angle strokes, in millimeters"
            InputProps={{
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
            inputProps={{
              step: '10',
              min: '10',
            }}
            value={props.pS}
            onChange={props.handleChange}
          />
        </div>

      </CardContent>
    </Card>

    <Card>
      <CardContent>
        <Typography>Page Size and Margins</Typography>

        <div>
          {/* Page height */}
          <TextField
            id="pH"
            label="Page Height"
            type="number"
            margin="normal"
            helperText="The height of your sheet of paper, in millimeters"
            InputProps={{
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
            inputProps={{
              step: '1',
              min: '0',
            }}
            value={props.pH}
            onChange={props.handleChange}
          />
        </div>

        <div>
          <TextField
            id="pW"
            label="Page Width"
            type="number"
            margin="normal"
            helperText="The width of your sheet of paper, in millimeters"
            InputProps={{
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
            inputProps={{
              step: '1',
              min: '0',
            }}
            value={props.pW}
            onChange={props.handleChange}
          />
        </div>

        <div>
          <TextField
            id="tM"
            label="Top margin"
            type="number"
            margin="normal"
            helperText="The margin between the top edge of your page and the top guideline"
            InputProps={{
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
            inputProps={{
              step: '1',
              min: '0',
            }}
            value={props.tM}
            onChange={props.handleChange}
          />
        </div>

        <div>
          <TextField
            id="bM"
            label="Bottom margin"
            type="number"
            margin="normal"
            helperText="The margin between the bottom edge of your page and the bottom guideline"
            InputProps={{
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
            inputProps={{
              step: '1',
              min: '0',
            }}
            value={props.bM}
            onChange={props.handleChange}
          />
        </div>

        <div>
          <TextField
            id="lM"
            label="Left margin"
            type="number"
            margin="normal"
            helperText="The margin between the left edge of your page and the guidelines"
            InputProps={{
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
            inputProps={{
              step: '1',
              min: '0',
            }}
            value={props.lM}
            onChange={props.handleChange}
          />
        </div>

        <div>
          <TextField
            id="rM"
            label="Right margin"
            type="number"
            margin="normal"
            helperText="The margin between the right edge of your page and the guidelines"
            InputProps={{
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
            inputProps={{
              step: '1',
              min: '0',
            }}
            value={props.rM}
            onChange={props.handleChange}
          />
        </div>

      </CardContent>
    </Card>
  </div>
);

Inputs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  nW: PropTypes.number.isRequired,
  xH: PropTypes.number.isRequired,
  aH: PropTypes.number.isRequired,
  dH: PropTypes.number.isRequired,
  // bC: PropTypes.string.isRequired,
  iS: PropTypes.number.isRequired,
  vA: PropTypes.number.isRequired,
  vS: PropTypes.number.isRequired,
  // vC: PropTypes.string.isRequired,
  pA: PropTypes.number.isRequired,
  pS: PropTypes.number.isRequired,
  // pC: PropTypes.string.isRequired,
  pH: PropTypes.number.isRequired,
  pW: PropTypes.number.isRequired,
  tM: PropTypes.number.isRequired,
  bM: PropTypes.number.isRequired,
  lM: PropTypes.number.isRequired,
  rM: PropTypes.number.isRequired,
};

export default Inputs;

// TODO: Add checkboxes for margin indicators for x-height and nib width
// ladders to Fundamental Guidelines Card
