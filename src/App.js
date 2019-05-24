import React, { Component } from 'react';
import './App.css';

import Inputs from './inputs';

import SVG from './svg';
import { appStateBlackLetter } from './fixtures';
import lineGroup from './drawLine';

// This chunk needs to accept state where lineGroup lives, with a fallback default
const lineArray = lineGroup(appStateBlackLetter);
const svgBlackLetter = Object.assign({ lineArray }, appStateBlackLetter);

class App extends Component {
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
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Calligraphy Guidelines Generator</h1>
        </header>

        <div className="inputs" style={{ float: 'left' }}>
          <Inputs />
        </div>

      <div>

        <SVG
          className="svg"
          {...svgBlackLetter}
        />
      </div>

      </div>
    );
  }
}

export default App;
