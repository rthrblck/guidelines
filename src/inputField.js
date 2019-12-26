import React, { useRef } from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const inputProps = {
  step: '0.1',
  min: '0',
  size: '10rem',
};

const InputProps = {
  endAdornment: <InputAdornment position="end">mm</InputAdornment>,
};

const MyTextField = props => (
  <div>
    <TextField
      id="nW"
      name="nW"
      type="number"
      label={props.label}
      margin="normal"
      value={props.nW}
      style={{ width: inputProps.size }}

      InputProps={InputProps}
      inputProps={inputProps}
    />

    <IconButton aria-label="Subtract">
      <RemoveIcon />
    </IconButton>

    <IconButton
      aria-label="Add"
      onClick={() => console.log(props.nW + inputProps.step)}
    >
      <AddIcon />
    </IconButton>

    <Tooltip title={
      <React.Fragment>
        <Typography color="inherit">The width of your broad-edged nib</Typography>
      </React.Fragment>
    }
    >
      <IconButton aria-label="More Info">
        <HelpIcon />
      </IconButton>
    </Tooltip>

  </div>
);

export default MyTextField;
