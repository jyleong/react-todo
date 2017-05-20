var moment = require('moment');

console.log(moment().format());

var now = moment();
// store this inside the state of our application
console.log('Curent timestamp', now.unix());

var timestamp = 1495316804
var currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format('MMMM D, YYYY @ h:mm a'));
