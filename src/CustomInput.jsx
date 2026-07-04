import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

function CustomInput(props) {
  return (
    <Box sx={{ display: 'flex', height: 'auto', paddingTop: '10px', paddingBottom: '10px' }}>

      <TextField
        id={props.id}
        label={props.label}
        type="number"
        margin="normal"
        value={props.value}
        onChange={props.onChange}

        slotProps={{
          htmlInput: {
            step: props.step,
            min: props.min,
            max: props.max,
          },
          input: {
            endAdornment: <InputAdornment position="end">{props.inputAdornment}</InputAdornment>,
            sx: { width: '12rem' },
          },
        }}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>

        <IconButton
          aria-label="addStep"
          sx={{ marginBottom: '-18px' }}
          onClick={
          () => props.addButtonClick(props.id, props.step, props.max, props.min)}
        >
          <AddBoxIcon
            fontSize="small"
          />
        </IconButton>

        <IconButton
          aria-label="subtractStep"
          onClick={
          () => props.subtractButtonClick(props.id, props.step, props.max, props.min)}
        >
          <IndeterminateCheckBoxIcon
            fontSize="small"
          />
        </IconButton>

      </Box>

      <Tooltip
        title={
          <>
            <Typography color="inherit">{props.helpText}</Typography>
          </>
        }
        placement="right"
      >
        <IconButton aria-label="More Info" sx={{ marginTop: '32px' }}>
          <HelpOutlineIcon
            fontSize="small"
          />
        </IconButton>
      </Tooltip>

    </Box>
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
