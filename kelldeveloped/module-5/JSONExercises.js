// 2 

var jsObject = {
	counts: [150, 12, 4, 37],
	start: '5:00',
	end: '8:00'
};
var jsToJson = JSON.stringify(jsObject);
console.log(jsToJson);
var jsToPrettyJson = JSON.stringify(jsObject, null, 1);
console.log(jsToPrettyJson);

// 3
var myObject = '{"students":["kelly"], "instructor":"ryan", "moduleNumber":5}';
var parseMyObject = JSON.parse(myObject);
console.log(parseMyObject);

/* {students: Array(1), instructor: "ryan", moduleNumber: 5}
instructor: "ryan"
moduleNumber: 5
students: ["kelly"]
__proto__: Object */

parseMyObject.students.push("John Jacob Jingleheimer Schmidt");
console.log(parseMyObject);

parseMyObject.students.pop();
"John Jacob Jingleheimer Schmidt"
parseMyObject.students.pop();
"kelly"
console.log(parseMyObject);

parseMyObject.students.push({ name: Kelly, favoriteTeacherName: 'Jeff' });
parseMyObject.students.push({ name: 'Kelly', favoriteTeacherName: 'Jeff' });
console.log(parseMyObject);

// 4

var promise = fetch('http://module5.tk/json', {
  method: "GET"
});

promise.then(function(response) {
  console.log(response.headers);

  var promise2 = response.text();
  promise2.then(function(text) {
    console.log(text);
  });
});

/* Headers {}
__proto__: Headers
append: ƒ append()
delete: ƒ delete()
entries: ƒ entries()
forEach: ƒ forEach()
get: ƒ ()
has: ƒ has()
keys: ƒ keys()
set: ƒ ()
values: ƒ values()
constructor: ƒ Headers()
Symbol(Symbol.iterator): ƒ entries()
Symbol(Symbol.toStringTag): "Headers"
__proto__: Object
{"hello":"world","numbers":[1,2,3,4,5]} */

// 5

// Looping with for to add all numbers in array

var promise = fetch('http://module5.tk/number-list', {
  method: "GET"
});

promise.then(function(response) {
  console.log(response.headers);

  var promise2 = response.text();
  promise2.then(function(text) {
	var numList = JSON.parse(text);
	var total = 0;
	for (i = 0; i < numList.numbers.length; i++) {
	total += numList.numbers[i];
    };
	console.log(total);
});
}); 
//Headers {}
// 92588

// Using .reduce to add all numbers in array

var promise = fetch('http://module5.tk/number-list', {
  method: "GET"
});

promise.then(function(response) {
  console.log(response.headers);

  var promise2 = response.text();
  promise2.then(function(text) {
	var numList = JSON.parse(text);
	let sum = numList.numbers.reduce((a, b) => (a + b));
	console.log(sum);
});
});

//Headers {}
92588

// Using .reduce to subtract all numbers in array

var promise = fetch('http://module5.tk/number-list', {
  method: "GET"
});

promise.then(function(response) {
  console.log(response.headers);

  var promise2 = response.text();
  promise2.then(function(text) {
	var numList = JSON.parse(text);
	let sum = numList.numbers.reduce((a, b) => (a - b));
	console.log(sum);
});
});

// Headers {}
// -77530

// Looping backwards to add all numbers

var promise = fetch('http://module5.tk/number-list', {
  method: "GET"
});

promise.then(function(response) {
  console.log(response.headers);

  var promise2 = response.text();
  promise2.then(function(text) {
	var numList = JSON.parse(text);
	var total = 0;
	for (i = numList.numbers.length; i-- > 0;) {
	total += numList.numbers[i];
    };
	console.log(total);
});
});

//Headers {}
//92588