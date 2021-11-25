function calculateDaysBetweenDates(begin, end) {
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(begin);
  var secondDate = new Date(end);

  return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
}

function countLeapYearBetweenDates(begin,end){
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(begin);
  var secondDate = new Date(end);
  var leapYear = 0;
  var days = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
  for(var i = 0; i < days; i++){
    if(firstDate.getFullYear() % 4 == 0){
      leapYear++;
    }
    firstDate.setDate(firstDate.getDate() + 1);
  }
  return leapYear;
}

console.log(calculateLeapYearBetweenDates('01/01/1900', '01/01/2020'));
