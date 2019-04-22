// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// const numbers = LOOP HERE TO COUNT 1 THROUGH 100

//     if { IT IS IS DIVISIBLE BY 3 PRINT FIZZ}
//     else if { IT IS A NUMBER DVISIBLE BY 5 PRINT BUZZ};
//     else {PRINT NUMBER};
//     console.log(numbers);

    // let number = 1
    // while (number <= 100){
    //     if (number % 3){
    //         console.log("Fizz");
    //     } else if (number % 5) {
    //         console.log("Buzz");
    //     } else {
    //         console.log(number);
    //     }
    //     number++;
    // }

    for ( let number = 0; number <= 100; number++) {
        if (number % 3 === 0) {
            console.log("Fizz");
        } else if (number % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(number);
        };
    }

    for ( let number = 0; number <= 100; number++) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log("FizzBuzz")
        } else if (number % 3 === 0) {
            console.log("Fizz");
        } else if (number % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(number);
        };
    }

// for (let number = 0; number <= 100; number++){
//     console.log(number);
// }
//         if (number % 3) {
//             console.log("Fizz");
//         } else if (number % 5) {
//             console.log("Buzz");
//         } else {
//             console.log(number);
//         }

