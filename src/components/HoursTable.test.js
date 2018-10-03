import React from 'react';
import {shallow} from 'enzyme';
import HoursTable from './HoursTable';
import converter from '../utils/openingHoursConverter';

const input = require('../input/input2');

let convertedData = converter(input);

//testing a very basic styling of the hours table
it('renders without crashing', () => {
  const wrapper = shallow(<HoursTable data={convertedData}/>);
  const tableElement = wrapper.find('.hours-table');
  expect(tableElement.props().style.display).toBe('flex');
});

describe('HoursTable', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HoursTable data={convertedData}/>);
    expect(wrapper).toMatchSnapshot();
  });
});