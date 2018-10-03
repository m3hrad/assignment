import converter from './openingHoursConvertor';
const input1 = require('../input/input1');
const input1Converted = require('../input/input1Converted');
const input2 = require('../input/input2');
const input2Converted = require('../input/input2Converted');

test('Converted data should be correct for multiple hours.', () => {
  expect(converter(input1)).toEqual(input1Converted);
});

test('Converted data should be correct for the exceptions of closing time in the next day.', () => {
  expect(converter(input2)).toEqual(input2Converted);
});