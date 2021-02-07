/* -------------------------------- 
// CUSTOM.JS
-------------------------------- */ 
var months = [ "January","February","March","April","May","June","July","August","September","October","November","December" ];
moment().format();

$('.job').each(function(i){
  var thisJobI = i,
      thisTime,
      startMonth,
      startYear,
      startDate,
      endMonth,
      endYear,
      endDate;
  
  $(this).find('time').each(function(i){
    thisTime = $(this).html();
    
    if ( thisTime == 'Present') {
      var dateObj = new Date();
      var month   = dateObj.getMonth(); //months from 1-12
      var year    = dateObj.getFullYear();
          thisTime = months[month] + ' ' + year;    
    }
    
    switch (i) {
      case 0: // start
        startMonth  = singleDigit( getMonthFromString( thisTime.split(' ')[0] ) ),
        startYear   = thisTime.split(' ')[1],
        startDate   = startYear + '-' + startMonth;
        break;
      case 1: // end
        endMonth    = singleDigit( getMonthFromString( thisTime.split(' ')[0] ) ),
        endYear     = thisTime.split(' ')[1],
        endDate     = endYear + '-' + endMonth;
        break;
    }
  });

  var m1      = moment(startDate,'YYYY-MM'),
      m2      = moment(endDate,'YYYY-MM'),
      diff    = moment.preciseDiff(m1, m2);

  $(this).find('h6 span').html('(' + diff + ')');
});

// ADD ZERO IF NUMBER IS SINGLE DIGIT
function singleDigit(n){
  return n > 9 ? "" + n: "0" + n;
}

// CONVERT MONTH STRING INTO NUMBER
function getMonthFromString(mon){

   var d = Date.parse(mon + "1, 2012");
   if(!isNaN(d)){
      return new Date(d).getMonth() + 1;
   }
   return -1;
 }