import { useState, useCallback, useRef } from 'react';

import Fab from '@mui/material/Fab';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import JSPDF from 'jspdf-yworks';
import svg2pdf from 'svg2pdf.js';

import './App.css';

import Inputs from './Inputs';

import SVG from './SVG';
import lineGroup from './drawLine';

function App() {
  const [nW, setNW] = useState(3);
  const [xH, setXH] = useState(5);
  const [aH, setAH] = useState(3);
  const [dH, setDH] = useState(3);
  const [bC, setBC] = useState('black');
  const [iS, setIS] = useState(1);
  const [sA, setSA] = useState(0);
  const [sS, setSS] = useState(30);
  const [sC, setSC] = useState('gray');
  const [pA, setPA] = useState(45);
  const [pS, setPS] = useState(30);
  const [pC, setPC] = useState('red');
  const [pH, setPH] = useState(216);
  const [pW, setPW] = useState(279);
  const [tM, setTM] = useState(10);
  const [bM, setBM] = useState(15);
  const [lM, setLM] = useState(10);
  const [rM, setRM] = useState(10);

  const svgRef = useRef(null);

  const setters = {
    nW: setNW, xH: setXH, aH: setAH, dH: setDH, bC: setBC, iS: setIS,
    sA: setSA, sS: setSS, sC: setSC, pA: setPA, pS: setPS, pC: setPC,
    pH: setPH, pW: setPW, tM: setTM, bM: setBM, lM: setLM, rM: setRM,
  };

  const handleChange = useCallback((event) => {
    const name = event.target.id;
    const value = parseFloat(event.target.value);
    setters[name](value);
  }, []);

  const addButtonClick = useCallback((id, step, max, min) => {
    const currentValue = parseFloat(({
      nW, xH, aH, dH, bC, iS, sA, sS, sC, pA, pS, pC, pH, pW, tM, bM, lM, rM,
    }[id]));
    const newValue = parseFloat((currentValue + step).toFixed(2));
    const validateBounds = Math.max(Math.min(newValue, max), min);
    setters[id](validateBounds);
  }, [nW, xH, aH, dH, bC, iS, sA, sS, sC, pA, pS, pC, pH, pW, tM, bM, lM, rM]);

  const subtractButtonClick = useCallback((id, step, min, max) => {
    const currentValue = parseFloat(({
      nW, xH, aH, dH, bC, iS, sA, sS, sC, pA, pS, pC, pH, pW, tM, bM, lM, rM,
    }[id]));
    const newValue = parseFloat((currentValue - step).toFixed(2));
    const validateBounds = Math.min(Math.max(newValue, max), min);
    setters[id](validateBounds);
  }, [nW, xH, aH, dH, bC, iS, sA, sS, sC, pA, pS, pC, pH, pW, tM, bM, lM, rM]);

  const download = useCallback(() => {
    const svgElement = svgRef.current;
    const pdf = new JSPDF('l', 'mm', [pW, pH]);
    svg2pdf(svgElement, pdf, {
      xOffset: 0,
      yOffset: 0,
      scale: 1,
    });
    pdf.save('myPDF.pdf');
  }, [pW, pH]);

  const state = { nW, xH, aH, dH, bC, iS, sA, sS, sC, pA, pS, pC, pH, pW, tM, bM, lM, rM };

  return (
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
            {...state}
            handleChange={handleChange}
            addButtonClick={addButtonClick}
            subtractButtonClick={subtractButtonClick}
          />
        </div>

        <div
          className="svg"
        >
          <SVG
            ref={svgRef}
            {...state}
            lineArray={lineGroup(state)}
          />
        </div>

        <Fab
          sx={{
            position: 'absolute',
            bottom: 10,
            right: 10,
          }}
          variant="extended"
          onClick={download}
        >
          <ArrowDownwardIcon />
          Download
        </Fab>

      </div>

    </div>
  );
}

export default App;
