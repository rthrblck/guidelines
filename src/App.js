import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import Fab from '@material-ui/core/Fab';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import JSPDF from 'jspdf-yworks';
import svg2pdf from 'svg2pdf.js';

import './App.css';

import Inputs from './Inputs';

import SVG from './svg';
import lineGroup from './drawLine';

const theme = createMuiTheme({
  typography: {
    fontSize: 20,
  },
});

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
      sC: 'gray',
      pA: 45,
      pS: 30,
      pC: 'red',

      // Page size and margins
      pH: 216,
      pW: 279,
      tM: 10,
      bM: 15,
      lM: 10,
      rM: 10,
    };

    this.svgRef = React.createRef();

    this.handleChange = (event) => {
      const name = event.target.id;
      const value = parseFloat(event.target.value);
      this.setState({ [name]: value });
    };

    this.addButtonClick = (id, step, max, min) => {
      const newValue = (parseFloat((this.state[id] + step).toFixed(2)));
      const validateBounds = Math.max(Math.min(newValue, max), min);
      this.setState({ [id]: validateBounds });
    };

    this.subtractButtonClick = (id, step, min, max) => {
      const newValue = (parseFloat((this.state[id] - step).toFixed(2)));
      const validateBounds = Math.min(Math.max(newValue, max), min);
      this.setState({ [id]: validateBounds });
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
      <MuiThemeProvider theme={theme}>
        <div className="App">

          <header className="App-header">
            <h1 className="App-title">X-Height</h1>
            <h3 className="App-intro">A calligraphy guideline generator, built by a calligrapher for calligraphers.</h3>
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
                addButtonClick={this.addButtonClick}
                subtractButtonClick={this.subtractButtonClick}
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

            <Fab
              style={{
                position: 'absolute',
                bottom: theme.spacing(10),
                right: theme.spacing(10),
              }}
              variant="extended"
              onClick={this.download}
            >
              <ArrowDownwardIcon />
              Download
            </Fab>

          </div>

        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
