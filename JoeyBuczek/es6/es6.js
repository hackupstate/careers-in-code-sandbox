/* 
  Define the function 'helloCiC', which logs "Hello Careers in Code!"
*/



/*
 Define the function 'greetings', which logs a greeting and a name,
 where the default greeting is "Greetings". Example output would
 look like this: "Greetings earthling" with the default greeting value,
 and would look like this: "Hi earthling" with a greeting passed in.
*/



/*
 Define the function 'getConfig', which returns an object with the
 following shape/default values: { port: 3000, timeout: 10000 }.
 These values are able to be changed by passing in an object into 
 the function that represents the values that should be applied.
 Use the spread operator to achieve this. Once you completed, then
 try to do it in only one line of code.
*/



/*
 Define the function 'createConfig', which returns an object with the
 following shape/default values: { port: 3000, timeout: 10000 }.
 These values are able to be changed by passing in an object into 
 the function that represents the values that should be applied.
 Using destructuring and object shorthand notation to complete this.
 Once completed, try to do it in only one line of code.
*/



/*
 Define the function 'freezingTemps', which returns an object of the
 following shape/values: { celsius: 0, fahrenheit: 32 }. This function
 accepts an array as its only argument, where the first element in the
 array represents the celsius value, and the second for fahrenheit.
 Using destructuring and object shorthand notation to complete this.
 Once completed, try to do it in only one line of code.
*/



/*
  Define the function 'sum', which takes any number of integer arguments
  and then returns the sum all arguments passed to it. Use the rest
  operator to accomplish this. Once completed, then try to do it in 
  only one line of code.
*/



/*
  Define the function 'swear', which takes a single string argument
  and logs the sentence: "ARG is a word, I swear!" where 'ARG' is 
  the argument passed in. Use a template literal to achieve this.
*/



/* 
  ===--- TESTS ---===
  The below are used for testing your solution.
  The result you should see is in the comment to the right.
  Uncomment each one when you're ready.
*/

 //helloCiC()

 //greetings("earthling"); // Greetings earthling
 //greetings("earthling", "Hi"); // Hi earthling

 //console.log(getConfig()); // { port: 3000, timeout: 10000 }
 //console.log(getConfig({ port: 8000, timeout: 6000 })); // { port: 8000, timeout: 6000 }

 //console.log(createConfig()); // { port: 3000, timeout: 10000 }
 //console.log(createConfig({ port: 8000, timeout: 6000 })); // { port: 8000, timeout: 6000 }

 //console.log(freezingTemps([0, 32])); // { celsius: 0, fahrenheit: 32 }
 //console.log(freezingTemps2([0, 32])); // { celsius: 0, fahrenheit: 32 }

 //console.log(sum(1,2,3,4,5)); // 15

 //swear('JavaScript'); // JavaScript is a word, I swear!