import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const inputProps = {
  step: '0.1',
  min: '0',
  size: 200,
};

const InputProps = {
  endAdornment: <InputAdornment position="end">mm</InputAdornment>,
};

const FormHelperTextProps = {
};

const InputLabelProps = {
};

const MyTextField = props => (
  <div>
    <TextField
      id="nW"
      type="number"
      label="Nib width"
      margin="normal"
      helperText="The width of your broad-edged nib"
      value="3"
      onChange={props.handleChange}

      InputProps={InputProps}
      inputProps={inputProps}
      InputLabelProps={InputLabelProps}
      FormHelperTextProps={FormHelperTextProps}
    />
  </div>
);

export default MyTextField;
