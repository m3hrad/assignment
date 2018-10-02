import React from 'react';
import PropTypes from 'prop-types';
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
      todayComponent = <span>TODAY</span>;

    }


    let displayedHours = '';
    let hours = this.props.hours;

    if (hours === undefined || hours.length === 0) {
      displayedHours = 'Closed';
    }
    else {
      displayedHours = this.props.hours.map((hour,index) => {
        if (hour.type === 'close'){
          hour.value = ' - ' + hour.value;
        }
        if (this.isEven(index) && index !== 0){
          hour.value = ', ' + hour.value;
        }
        return hour.value;
      });
    }

    return (
      <div>
        {capitalizedDay}
        {todayComponent}
        {displayedHours}
      </div>
    );
  }
}

Day.propTypes = {
  day: PropTypes.any.isRequired,
  hours: PropTypes.any.isRequired,
};