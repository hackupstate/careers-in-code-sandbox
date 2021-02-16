// DAY 1 - EASY
// Given a list of numbers and a number k, return whether any 2 numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

// Iterate over an array of numbers does index 0 and index 1 equal k? does index 0 and index 2 = k? etc...maybe do it with a for loop inside of another for loop. first loop selects index, then loops through the rest of them

const array = [10,15,3,7];
const k = 17
// Running through to get the 1st element of our addition
for (let i = 0; i < array.length; i++){
    //Running through to check if the 2nd element adds with the 1st element and equals k
    for (let j = i+1; j<array.length; j++){
        //if i and j don't add up to k, run again
        if ( i + j !== k) {
            // if they do add up to k, return true
        } else {
            i + j === k
        } return true
    }
}

