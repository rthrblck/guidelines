import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MyCheckbox from '../Checkbox';

const actionLogger = action('checked');

class FakeApp extends React.Component {
  state = {
    checkedA: true,
  };

  // This will need to moved to the App level
  handleChange = name => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  checkedAHandleChange = (event) => {
    actionLogger('old', this.state.checkedA, 'new', event.target.checked);
    this.setState({ checkedA: event.target.checked });
  };

  render() {
    return (
      <MyCheckbox
        checked={this.state.checkedA}
        changeHandler={this.checkedAHandleChange}
      >
        Hi
      </MyCheckbox>
    );
  }
}

storiesOf('Checkbox', module)
  .add('test', () => (
    <FakeApp />
  ));
