// Function declaration with 2 local variable declarations
function myFunc(arg1, arg2){
  
}

// Generic loop
// You decide which element/index to pull out
//var arr = ['first', 'second', 'third'];
//for (var i = 0; i < 3; i++) {
//  console.log(arr[i])
//}



// Loop method available ON the array
// ie: array gives forEach every element/index
//var arr = ['a','b','c']
//arr[0] // 'a'
//arr.forEach(function(element, elementPosition){
//  console.log(element, elementPosition) // ie: 'a' 0, 'b' 1 ...
//});


var arr = [12, 24, 48];
// Return calc result of map and place new array into newArr variable 
// Below we are using "chaining" to get an eventual result
var newArr = arr.map(function(element, elementPosition){
  return element * 2;
}).map(function(element, elementPosition){
  return element * 3;
}); // [72, 144, 288]

// ... further down ...
// Log out the new calculated array
console.log(newArr) // [72, 144, 288]
