import React from 'react';
import { FormGroup, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import PropTypes from 'prop-types';


export const MyCheckbox = props => (
  <FormGroup>
    <FormControlLabel
      control={
        <Checkbox
          checked={props.checked}
          onChange={props.changeHandler}
          value="checkedA"
        />
      }
      label="Nib marks"
    />
    <FormHelperText>Check here to include nib marks in the left margin</FormHelperText>
  </FormGroup>
);

MyCheckbox.propTypes = {
  checked: PropTypes.bool,
  changeHandler: PropTypes.func.isRequired,
};

MyCheckbox.defaultProps = {
  checked: true,
};

export default MyCheckbox;
