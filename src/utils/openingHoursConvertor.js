let moment = require('moment');

// converts time in UNIX to the time of the day
function convertTime(time){
  return moment.unix(time).format('hh:mm A');
}

function openingHoursConverter(data){

  let unclosedDay = null;

  let convertedOpeningHours = {};

  for (let property in data) {
    if (data.hasOwnProperty(property)) {

      let timeValues = data[property];

      let convertedHours = data[property].map(item => {
        item.value =  convertTime(item.value);
        return item;
      });

      if (timeValues.length > 0){
        let firstTimeValue = timeValues[0];
        let lastTimeValue = timeValues[timeValues.length - 1];

        //remove the close time from the current day and add it to the the unclosed day if it exist
        if (firstTimeValue.type === 'close') {
          convertedOpeningHours[unclosedDay].push(data[property][0]);
          convertedHours.splice(0, 1);
        }

        // keeping track of the last day which is not closed yet.
        if (lastTimeValue.type === 'open'){
          unclosedDay = property;
        }
      }

      convertedOpeningHours[property] = convertedHours;
    }
  }

  return convertedOpeningHours;
}

export default openingHoursConverter;