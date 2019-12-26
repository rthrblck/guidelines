import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import { storiesOf } from '@storybook/react';
import MyTextField from '../inputField';

const theme = createMuiTheme({
  typography: {
    fontSize: 20,
  },
});

class Scaffold extends React.Component {
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

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <MyTextField
          {...this.state}
        />
      </MuiThemeProvider>
    );
  }
}

storiesOf('inputField', module).add('initial', () => (
  <Scaffold />
));

// Rebuild TextField with underlying components?
// Buttons that update state by the step
// Proper state updates (clone state, update change, return new state)
