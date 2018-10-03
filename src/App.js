import React, {Component} from 'react';
import './App.css';
import converter from './utils/openingHoursConverter';
import HoursTable from './components/HoursTable';
import {BACKGROUND} from './styles/colors';

const input = require('./input/input');

class App extends Component {
  render() {
    let convertedData = converter(input);

    const style = {
      backgroundColor: BACKGROUND,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontFamily: 'Circular Std Medium'
    };

    return (
      <div className='App' style={style}>
        <HoursTable data={convertedData}/>
      </div>
    );
  }
}

export default App;
