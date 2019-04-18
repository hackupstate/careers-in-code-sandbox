/* let myNumber = 1;

while (myNumber < 5) {
    console.log(`Current: ${myNumber}`);
    myNumber++;
}

console.log(`Done: ${myNumber}`); */

/* const myNumber = 3;

switch (myNumber) {
    case 1:
    case 2:
    console.log('It\'s one or two!');
    break;
    case 3:
    console.log('It\'s three!');
    break;
    default: 
    console.log('It\'s something else!');
    break;
} */

/* const original = {a: 1, b: 2};
const copy = original;
copy.a = 2;
console.log(original); */

/* const original = [1, 2, 3];

const copy = original;
copy[0] = 2;
console.log(original); */

let globalVar = 1;

function doThings() {
    globalVar = 2;
    const localVar = 2;
    return localVar + 5;
}
console.log(doThings());
console.log(globalVar);
//console.log(localVar);

This is Dana and I've edited your file with this sentence. Have a good night!