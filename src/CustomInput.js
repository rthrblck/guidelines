import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';

function
CustomInput(props) {
  const inputProps = {
    step: props.step,
    min: '0',
    size: '10rem',
  };
  const InputProps = {
    endAdornment: <InputAdornment position="end">{props.inputAdornment}</InputAdornment>,
  };
  return (
    <div>
      <TextField
        id={props.id}
        label={props.label}
        type="number"

        value={props.value}
        min={props.min}
        onChange={props.onChange}

        inputProps={inputProps}
        InputProps={InputProps}
        style={{ width: inputProps.size }}
      />

      <IconButton aria-label="subtractStep" style={{ display: 'inline' }}>
        <RemoveIcon
          onClick={
          () => props.subtractButtonClick(props.id, props.step)}
        />
      </IconButton>

      <IconButton aria-label="addStep">
        <AddIcon
          onClick={
          () => props.addButtonClick(props.id, props.step)}
        />
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
}

CustomInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  subtractButtonClick: PropTypes.func.isRequired,
  addButtonClick: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  inputAdornment: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};

export default CustomInput;
