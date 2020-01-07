import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    height: 'auto',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  plusButton: {
    marginBottom: '-18px',
  },
  help: {
    marginTop: '32px',
  },
});

function CustomInput(props) {
  const classes = useStyles();

  const inputProps = {
    step: props.step,
    min: props.min,
    max: props.max,
    size: '12rem',
  };

  const InputProps = {
    endAdornment: <InputAdornment position="end">{props.inputAdornment}</InputAdornment>,
  };

  return (
    <div className={classes.wrapper}>

      <TextField
        id={props.id}
        label={props.label}
        type="number"
        margin="normal"
        value={props.value}
        onChange={props.onChange}

        inputProps={inputProps}
        InputProps={InputProps}
        style={{ width: inputProps.size }}
      />

      <div className={classes.buttonWrapper}>

        <IconButton aria-label="addStep" className={classes.plusButton}>
          <AddBoxIcon
            fontSize="small"
            onClick={
            () => props.addButtonClick(props.id, props.step, props.max, props.min)}
          />
        </IconButton>

        <IconButton aria-label="subtractStep" className={classes.minusButton}>
          <IndeterminateCheckBoxIcon
            fontSize="small"
            onClick={
            () => props.subtractButtonClick(props.id, props.step, props.max, props.min)}
          />
        </IconButton>

      </div>

      <Tooltip
        title={
          <React.Fragment>
            <Typography color="inherit">{props.helpText}</Typography>
          </React.Fragment>
        }
      >
        <IconButton aria-label="More Info" className={classes.help}>
          <HelpOutlineIcon
            fontSize="small"
          />
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
  max: PropTypes.number.isRequired,
  helpText: PropTypes.string.isRequired,
};

export default CustomInput;
