// FizzBuzz

for (let number = 1; number <= 100; number ++) {
   if (number % 15 == 0) {
       console.log('fizzbuzz');
    } else if (number % 3 == 0) {
        console.log('fizz');
    } else if (number % 5 == 0) {
       console.log('buzz');
    } else if (number % 1 == 0) {
        console.log(number);
    }
};

// Bean Counting

// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

function findBs(string) {
    let total = 0
    for (var i = 0; i < string.length; i ++) {
        if (string[i] === 'B') {
            total++;
        }
    }
    return (total);
}
console.log(findBs('Beautiful Blue Birds in Binghamton'));

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

function findBs(string, character) {
    let total = 0
    for (var i = 0; i < string.length; i ++) {
        if (string[i] === character ) {
            total++;
        }
    }
    return (total);
}
console.log(findBs('Beautiful Blue Birds in Binghamton', 'e'));