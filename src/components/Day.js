import React from 'react';
import PropTypes from 'prop-types';

export default class Day extends React.Component {
  isEven(value){
    return (value % 2) === 0;
  }

  render() {
    let displayedHours = '';
    let hours = this.props.hours;

    if (hours === undefined || hours.length === 0) {
      displayedHours = 'closed';
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
        {this.props.day}
        {displayedHours}
      </div>
    );
  }
}

Day.propTypes = {
  day: PropTypes.any.isRequired,
  hours: PropTypes.any.isRequired,
};