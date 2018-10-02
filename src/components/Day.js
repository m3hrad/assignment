import React from 'react';
import PropTypes from 'prop-types';
import { TODAY, BORDER, CLOSED, BODY } from '../styles/colors';
let moment = require('moment');

export default class Day extends React.Component {
  isEven(value){
    return (value % 2) === 0;
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const today = moment().format('dddd');
    const capitalizedDay = this.capitalizeFirstLetter(this.props.day);
    let todayComponent = '';

    if (capitalizedDay === today) {
      todayComponent = <span style={{color: TODAY, fontSize: '12px', fontFamily:'Circular Std Bold', marginLeft: '10px'}}>TODAY</span>;
    }

    let displayedHours = '';
    let hours = this.props.hours;

    let displayedHoursContent = '';
    let color = BODY;
    if (hours === undefined || hours.length === 0) {
      displayedHoursContent = 'Closed';
      color = CLOSED;
    }
    else {
      displayedHoursContent = this.props.hours.map((hour,index) => {
        if (hour.type === 'close'){
          hour.value = ' - ' + hour.value;
        }
        if (this.isEven(index) && index !== 0){
          hour.value = ', ' + hour.value;
        }
        return hour.value;
      });
    }
    displayedHours = <span style={{color:color, fontFamily: 'Circular Std Book'}}>{displayedHoursContent}</span>;

    const containerStyle = {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      borderBottom: '1px solid ' +  BORDER,
      fontSize: '16px',
      lineHeight: '22px',
      paddingTop: '7px',
      paddingBottom: '7px'
    };

    const dayContainerStyle = {
      minWidth: '140px'
    };

    return (
      <div style={containerStyle}>
        <span style={dayContainerStyle}>
          {capitalizedDay}
          {todayComponent}
        </span>
        {displayedHours}
      </div>
    );
  }
}

Day.propTypes = {
  day: PropTypes.any.isRequired,
  hours: PropTypes.any.isRequired,
};