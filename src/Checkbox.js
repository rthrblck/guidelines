import React from 'react';
import { FormGroup, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';


class MyCheckbox extends React.Component {
  state = {
    checkedA: true,
  };

  // This will need to moved to the App level
  handleChange = name => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
            />
          }
          label="Nib marks"
        />
        <FormHelperText>Check here to include nib marks in the left margin</FormHelperText>
      </FormGroup>
    );
  }
}

export default MyCheckbox;
