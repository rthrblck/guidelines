import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import logo from './logo.svg';
import grid from './grid.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Calligraphy Guideline Generator</h1>
            <img src={grid} className="App-grid" alt="grid" />
            <RaisedButton label="Default" />
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
