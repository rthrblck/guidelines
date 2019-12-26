import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import InputAdornment from '@material-ui/core/InputAdornment';

import { storiesOf } from '@storybook/react';
import CustomInput from '../incrementButtons';

const theme = createMuiTheme({
  typography: {
    fontSize: 20,
  },
});

class ButtonContainer extends React.Component {
  state = {
    // Basic lines
    nW: 3,
    xH: 5,
    aH: 5,
    dH: 5,
    cH: 4,
    bH: 0,
    bC: 'black',
    iS: 1,

    // Verticality and pen angle
    vA: 90,
    vS: 10,
    vC: 'gray',
    pA: 0,
    pS: 10,
    pC: 'red',

    // Page size and margins
    pH: 800,
    pW: 1100,
    tM: 20,
    bM: 30,
    lM: 20,
    rM: 20,
  };

  onChange = (e) => {
    const name = e.target.id;
    const value = parseFloat(e.target.value);
    this.setState({ [name]: value });
  };

  addButtonClick = (id, step) => {
    this.setState(state => ({ [id]: parseFloat((state[id] + step).toFixed(2)) }));
  }

  subtractButtonClick = (id, step) => {
    this.setState(state => ({ [id]: parseFloat((state[id] - step).toFixed(2)) }));
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CustomInput
          {...this.state}
          onChange={this.onChange}
          addButtonClick={this.addButtonClick}
          subtractButtonClick={this.subtractButtonClick}
          id="nW"
          value={this.state.nW}
          min={0}
          step={0.1}
          label="Nib width"
          inputAdornment="mm"
        />

      </MuiThemeProvider>
    );
  }
}

storiesOf('CustomInput', module).add('initial', () => (
  <ButtonContainer />
));

// Rebuild TextField with underlying components?
// Buttons that update state by the step
// Proper state updates (clone state, update change, return new state)
