/* You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function. */


function countBs(str){
    let countChars = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === "B") {countChars++;}
    }
    return countChars;
}

console.log(countBs("Bingo Hall Bonanaza Blowout"));

function countChar(str, character) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === character) {count++;}
    }
    return count;
}

console.log(countChar("eenie meanie minie moe", "e"));