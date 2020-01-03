import React from 'react';

import { storiesOf } from '@storybook/react';

import Inputs from '../Inputs';

class App extends React.Component {
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

  handleChange = (event) => {
    const name = event.target.id;
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <Inputs
        {...this.state}
        handleChange={this.handleChange}
      />
    );
  }
}

storiesOf('inputs', module)
  .add('initial setup', () => (
    <App />
  ));
