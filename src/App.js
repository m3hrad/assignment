import React, { Component } from 'react';
import converter from './utils/openingHoursConvertor';
import HoursTable from './components/HoursTable';
import { BACKGROUND } from './styles/colors';
const input = require('./input/input2');

class App extends Component {
  render() {
    let convertedData = converter(input);

    const style = {
      backgroundColor: BACKGROUND,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    };

    return (
      <div className="App" style={style}>
        <HoursTable data={convertedData} />
      </div>
    );
  }
}


export default App;
