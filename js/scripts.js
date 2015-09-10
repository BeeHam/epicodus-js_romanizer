//program logic
var romanNumerator = function(num) {
  // var romanNumSet = [{}, {1: 'I'}, {5: "V"}, {10: "X"}, {50: "L"}, {100: "C"}, {500: "D"}, {1000: "M"}];
  var romanNumSet = {1: 'I', 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M"};
  // if (num === romanNumSet[num]) {
  //   romanNumSet[num];
  // }

  for (var i in romanNumSet) {
  console.log("i: " + i);
  console.log("romanNum: " + romanNumSet[i]);
  console.log("****");
  debugger;
    if (num === parseInt(i)) {
      return romanNumSet[i];
    };
  }
};


//client logic
$(document).ready(function() {
  //formstuff

  // event.preventDefault();
});











////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
///
// //program logic
// var countUpBy = function(ceil, countBy) {
//   var resultSet = [];
//
//   for (var i = countBy; i <= ceil; i += countBy) {
//     resultSet.push(i);
//   }
//
//   return resultSet;
// };
//
//
// //client logic
// $(document).ready(function() {
//   $('form#counter').submit(function(event) {
//   var countUpTo = parseInt($("input#ceil").val());
//   var countCeil = parseInt($("input#countBy").val());
//   var result = countUpBy(countUpTo, countCeil);
//   for (var i in result) {
//     $("ul#count").append("<li>" + result[i] + "</li>");
//   };
//   $('#result').show();
//   event.preventDefault();
//   });
// });
