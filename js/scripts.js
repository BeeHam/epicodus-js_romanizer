// var romanNumerator = function(num) {
//   var romanNumSet = [{1: 'I' },
//                      {5: "V"},
//                      {10: "X"},
//                      {50: "L"},
//                      {100: "C"},
//                      {500: "D"},
//                      {1000: "M"}];
//
//   var romanized = [];
//
//   for (var i = romanNumSet.length; i >= 0 ;i--) {
//
//     while () {
//
//     }
// };
//





//program logic
var romanNumerator = function(num) {
  var romanNumSet = {1: 'I', 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M"};

  var romanized = [];

  for (var i = 0; i <= num; i++) {
    if (num === parseInt(i)) {
      romanized.push((romanNumSet[i]));
    }
  }
  return romanized.join('');

};
  // for (var i in romanNumSet) {
  //   if (num === parseInt(i)) {
  //
  //     converted.concat(romanNumSet[i])
  //     // return romanNumSet[i];
  //   };
  // }


//client logic
$(document).ready(function() {
  //formstuff

  // event.preventDefault();
});
