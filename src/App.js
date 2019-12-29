import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from '@material-ui/core/Button';

import JSPDF from 'jspdf-yworks';
import svg2pdf from 'svg2pdf.js';

import './App.css';

import Inputs from './Inputs';

import SVG from './svg';
import lineGroup from './drawLine';

class App extends Component {
  constructor() {
    super();

    this.state = {

      // Basic lines
      nW: 3,
      xH: 5,
      aH: 3,
      dH: 3,
      bC: 'black',
      iS: 1,

      // Verticality and pen angle
      sA: 0,
      sS: 30,
      vC: 'gray',
      pA: 45,
      pS: 30,
      pC: 'red',

      // Page size and margins
      pH: 216,
      pW: 279,
      tM: 30,
      bM: 35,
      lM: 30,
      rM: 30,
    };

    this.svgRef = React.createRef();

    this.handleChange = (event) => {
      const name = event.target.id;
      const value = parseFloat(event.target.value);
      this.setState({ [name]: value });
    };

    this.addButtonClick = (id, step) => {
      this.setState(state => ({ [id]: parseFloat((state[id] + step).toFixed(2)) }));
    };

    this.subtractButtonClick = (id, step, min) => {
      const newValue = (parseFloat((this.state[id] - step).toFixed(2)));
      const validateValue = Math.max(newValue, min);
      this.setState({ [id]: validateValue });
    };

    this.download = () => {
      const svgElement = ReactDOM.findDOMNode(this.svgRef.current);
      const pdf = new JSPDF('l', 'mm', [this.state.pW, this.state.pH]);
      svg2pdf(svgElement, pdf, {
        xOffset: 0,
        yOffset: 0,
        scale: 1,
      });
      pdf.save('myPDF.pdf');
    };
  }


  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Calligraphy Guidelines Generator</h1>
        </header>

        <div
          className="container"
        >

          <Inputs
            {...this.state}
            handleChange={this.handleChange}
            addButtonClick={this.addButtonClick}
            subtractButtonClick={this.subtractButtonClick}
          />

          <SVG
            ref={this.svgRef}
            {...this.state}
            lineArray={lineGroup(this.state)}
          />

          <Button
            variant="contained"
            onClick={this.download}
          >
          Download
          </Button>

        </div>

      </div>
    );
  }
}

export default App;
