import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import JSPDF from 'jspdf-yworks';
import svg2pdf from 'svg2pdf.js';

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
    vS: 30,
    vC: 'gray',
    pA: 45,
    pS: 30,
    pC: 'red',

    // Page size and margins
    pH: 215.9,
    pW: 279.4,
    tM: 30,
    bM: 35,
    lM: 30,
    rM: 30,
  };

  svgRef = React.createRef();

  handleChange = (event) => {
    const name = event.target.id;
    const value = parseFloat(event.target.value);
    this.setState({ [name]: value });
  };

  download = () => {
    const svgElement = ReactDOM.findDOMNode(this.svgRef.current);
    // const svgElement = this.svgRef.current;
    const pdf = new JSPDF('l', 'mm', [this.state.pW, this.state.pH]);
    svg2pdf(svgElement, pdf, {
      xOffset: 0,
      yOffset: 0,
      scale: 1,
    });
    pdf.save('myPDF.pdf');
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
              ref={this.svgRef}
              {...this.state}
              lineArray={lineGroup(this.state)}
            />
          </div>

          <div>
            <Button
              variant="contained"
              onClick={this.download}
            >
            Download
            </Button>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
