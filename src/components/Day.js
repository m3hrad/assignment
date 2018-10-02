import React from 'react';
import PropTypes from 'prop-types';
import { TODAY, BORDER, CLOSED } from '../styles/colors';
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
      todayComponent = <span style={{color: TODAY}}> TODAY</span>;
    }

    let displayedHours = '';
    let hours = this.props.hours;

    if (hours === undefined || hours.length === 0) {
      displayedHours = <span style={{color: CLOSED}}>Closed</span>;
    }
    else {
      let displayedHoursContent = this.props.hours.map((hour,index) => {
        if (hour.type === 'close'){
          hour.value = ' - ' + hour.value;
        }
        if (this.isEven(index) && index !== 0){
          hour.value = ', ' + hour.value;
        }
        return hour.value;
      });
      displayedHours = <span>{displayedHoursContent}</span>;
    }

    const containerStyle = {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      borderBottom: '1px solid ' +  BORDER,
      fontSize: '16px',
      lineHeight: '22px',
      paddingTop: '5px',
      paddingBottom: '5px'
    };

    return (
      <div style={containerStyle}>
        <span>
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