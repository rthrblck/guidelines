import React, { Component } from 'react';
import './App.css';

import Inputs from './inputs';

import SVG from './svg';
import lineGroup from './drawLine';

class App extends Component {
  state = {

    // Basic lines
    nW: 3,
    xH: 5,
    aH: 3,
    dH: 3,
    cH: 0,
    bH: 0,
    bC: 'black',
    iS: 3,

    // Verticality and pen angle
    vA: 0,
    vS: 10,
    vC: 'gray',
    pA: 45,
    pS: 10,
    pC: 'red',

    // Page size and margins
    pH: 850,
    pW: 1100,
    tM: 10,
    bM: 10,
    lM: 10,
    rM: 10,
  };

  handleChange = (event) => {
    const name = event.target.id;
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Calligraphy Guidelines Generator</h1>
        </header>

        <div
          className="inputs"
          style={{ float: 'left' }}
        >
          <Inputs
            {...this.state}
            handleChange={this.handleChange}
          />
        </div>

        <div
          className="svg"
          style={{ float: 'left' }}
        >
          <SVG
            {...this.state}
            lineArray={lineGroup(this.state)}
          />
        </div>

      </div>
    );
  }
}

export default App;
