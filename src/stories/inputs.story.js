import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Inputs from '../inputs';

class InputsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Fundamental lines
      nW: 3,
      xH: 5,
      aH: 5,
      dH: 5,
      cH: 4,
      bH: 0,
      iS: 1,
      // Verticality and pen angle
      vA: 90,
      vS: 10,
      pA: 0,
      pS: 10,
      // Page size and margins
      pH: 800,
      pW: 1100,
      tM: 20,
      bM: 30,
      lM: 20,
      rM: 20,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange uses input id as state key,
  // so keep input ids consistent with state variable names

  handleChange(event) {
    const name = event.target.id;
    this.setState({ [name]: event.target.value });
  }

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
    <Inputs />
  ));
