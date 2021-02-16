// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.


// function => go through word, letter by letter. is letter = B? If yes add 1, if no add 0...run until entire word has been ran through...

let countBs = "Better Business Bureau"
let howManyBs = 0

for (countBs.charAt = 0; countBs <= countBs.length; countBs.charAt++) {
    if (countBs === B) {
        howManyBs + 1;
    } else {
        howManyBs + 0;
    };
}
console.log(howManyBs);


// for (var i=0; i < texto.length; i++) { 
//      console.log(texto.charAt(i)); 


// function countBs = ???something that counts through the string??? 
//     if === B {
//         countBs + 1
//     } else {
//         countBs + 0
//     }