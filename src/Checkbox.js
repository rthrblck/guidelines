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
      label="The first checkbox"
    />
    <FormHelperText>This is some helper text</FormHelperText>
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
