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
    bC: 'black',
    iS: 1,

    // Verticality and pen angle
    vA: 0,
    vS: 50,
    vC: 'gray',
    pA: 45,
    pS: 50,
    pC: 'red',

    // Page size and margins
    pH: 279.4,
    pW: 600,
    tM: 30,
    bM: 40,
    lM: 30,
    rM: 30,
  };

  handleChange = (event) => {
    const name = event.target.id;
    const value = parseFloat(event.target.value);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Calligraphy Guidelines Generator</h1>
        </header>

        <div
          className="container"
        >

          <div
            className="inputs"
          >
            <Inputs
              {...this.state}
              handleChange={this.handleChange}
            />
          </div>

          <div
            className="svg"
          >
            <SVG
              {...this.state}
              lineArray={lineGroup(this.state)}
            />
          </div>

        </div>

      </div>
    );
  }
}

export default App;
