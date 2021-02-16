// exercise 1: In the javascript console, convert this string into a javascript object using the native JSON tools in the browser

var data = '{"menu":{"id":"file","value":"File","popup":[{"value":"New","onclick":"CreateNewDoc()"},{"value":"Open","onclick":"OpenDoc()"},{"value":"Close","onclick":"CloseDoc()"}]}}';
var dataObj = JSON.parse(data);
console.log(dataObj);


// exercise 2: Convert the below javascript object into a JSON object

var obj = {
    counts: [150, 12, 4, 37],
    start: '5:00',
    end: '8:00'
  };
  var JSONobj = JSON.stringify(obj);
  console.log(JSONobj);


// exercise 3: Using your knowlege of the JSON format, build a json object by hand inside of a string



// exercise 4: Make a GET request to the server's /json endpoint. Note down the response headers and response body.
var promise = fetch('http://module5.tk/json', {
  method: 'GET'
});

promise.then(function(response) {
  console.log(response.status);
});


// exercise 5: Make a GET request to the server's /number-list endpoint using fetch. Write a program to extract the array of numbers from the response (the response is encoded as json) and sum them all up. Use console.log to print out the result to the console.

var promise = fetch('http://module5.tk/number-list', {
  method: 'GET'
});

promise.then(function(response) {
  console.log(response.text());
});


