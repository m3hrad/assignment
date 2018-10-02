import React from 'react';
import PropTypes from 'prop-types';
import Day from './Day';

export default class HoursTable extends React.Component {
  render() {
    const daysData = this.props.data;
    const days = Object.keys(daysData).map(key =>
      <Day key={key} day={key} hours={daysData[key]} />
    );
    return (
      <div>
        Opening hours
        <br/>
        {days}
      </div>
    );
  }
}

HoursTable.propTypes = {
  data: PropTypes.any.isRequired,
};