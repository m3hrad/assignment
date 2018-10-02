import React from 'react';
import PropTypes from 'prop-types';
import Day from './Day';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import { BOX, BORDER, BODY, CLOSED } from '../styles/colors';


export default class HoursTable extends React.Component {
  render() {
    const daysData = this.props.data;
    const days = Object.keys(daysData).map(key =>
      <Day key={key} day={key} hours={daysData[key]} />
    );

    const containerStyle={
      display: 'flex',
      justifyContent: 'center'
    };

    const titleStyle={
      borderBottom: '1px solid ' + BODY,
      paddingBottom: '15px'
    };

    const tableStyle={
      fontSize: '24px',
      lineHeight: '30px',
      fontWeight: 'bold',
      width: '80%',
      backgroundColor: BOX,
      borderWidth: '10px',
      borderColor: BORDER,
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0px -5px 10px '+ BORDER +', -5px 0px 10px '+ BORDER + ', 0px 5px 10px '+ BORDER +', 5px 0px 10px '+ BORDER
    };

    const clockStyle={
      color: CLOSED,
      marginRight: '10px'
    };

    return (
      <div style={containerStyle}>
        <div style={tableStyle}>
          <div style={titleStyle}>
            <FontAwesomeIcon style={clockStyle} icon={faClock} />

            Opening hours
          </div>
          {days}
        </div>
      </div>
    );
  }
}

HoursTable.propTypes = {
  data: PropTypes.any.isRequired,
};