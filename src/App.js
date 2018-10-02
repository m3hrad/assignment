import React, { Component } from 'react';
import './App.css';
import converter from './utils/openingHoursConvertor';
import HoursTable from './components/HoursTable';
const input = require('./input/input2');

class App extends Component {
  render() {
    let convertedData = converter(input);
    return (
      <div className="App">
        <HoursTable data={convertedData} />
      </div>
    );
  }
}

export default App;
