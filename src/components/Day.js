import React from 'react';
import PropTypes from 'prop-types';
import {TODAY, BORDER, CLOSED, BODY} from '../styles/colors';

let moment = require('moment');

export default class Day extends React.Component {

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const todayStyle = {
      color: TODAY,
      fontSize: '12px',
      fontFamily: 'Circular Std Bold',
      marginLeft: '10px'
    };

    const containerStyle = {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      borderBottom: '1px solid ' + BORDER,
      fontSize: '16px',
      lineHeight: '22px',
      paddingTop: '7px',
      paddingBottom: '7px'
    };

    const dayContainerStyle = {
      minWidth: '140px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    };

    const displayedHoursStyle = {
      fontFamily: 'Circular Std Book',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-end'
    };

    const today = moment().format('dddd');
    const capitalizedDay = this.capitalizeFirstLetter(this.props.day);

    let hours = this.props.hours;
    let displayedHoursContent = [];
    let displayedHoursColor = BODY;

    let todayComponent = '';

    if (capitalizedDay === today) {
      todayComponent = <span style={todayStyle}>TODAY</span>;
    }

    // determine if restaurant is closed
    if (hours === undefined || hours.length === 0) {
      displayedHoursContent.push(<span key={capitalizedDay}>Closed</span>);
      displayedHoursColor = CLOSED;
    }
    else {
      let updatedHoursContent = this.props.hours.map(hour => {

        // adds the needed dash between open and close values
        if (hour.type === 'close') {
          hour.value = ' - ' + hour.value;
        }
        return hour.value;
      });

      /*
      This part takes care of making blocks out of each of the opening-closing hours pairs
      in order to prevent them going to the next line
       */
      for (let i = 0; i < updatedHoursContent.length; i = i + 2) {
        let andContent = i + 2 < updatedHoursContent.length ? ', ' : '';
        let element = <span key={i} style={{whiteSpace: 'nowrap'}}>
          {updatedHoursContent[i]}{updatedHoursContent[i + 1]}{andContent}
        </span>;
        displayedHoursContent.push(element);
      }
    }

    displayedHoursStyle['color'] = displayedHoursColor;
    const displayedHours = <div style={displayedHoursStyle}>{displayedHoursContent}</div>;

    return (
      <div style={containerStyle}>
        <div style={dayContainerStyle}>
          <span>
            {capitalizedDay}
            {todayComponent}
          </span>
        </div>
        {displayedHours}
      </div>
    );
  }
}

Day.propTypes = {
  day: PropTypes.any.isRequired,
  hours: PropTypes.any.isRequired,
};