import React from 'react';
import {shallow} from 'enzyme';
import Day from './Day';

const day = require('../input/day1');
const key = 'Monday';

describe('Day ', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Day key={key} day={key} hours={day[key]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});