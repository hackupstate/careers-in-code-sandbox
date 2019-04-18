// (5 + 5) * 7

const input = "7 5 5 + *";

const seperatedInput=input.split(" ");
// console.log(seperatedInput);

const stack = [];
let a, b;

for (let i = 0; i < seperatedInput.length; i++){
    const token = seperatedInput[i]
    // console.log(token);
    if (!isNaN (parseFloat(token))) {
        // we know it's a number now..it's not(!==) not a number (Nan)..so it's a number, put it on our stack
        stack.push(parseFloat(token));
    } else if (token === "+") {
         a = parseFloat (stack.pop());
         b = parseFloat (stack.pop());
        stack.push(a + b);
    } else if (token === "-") {
         a = parseFloat (stack.pop());
         b = parseFloat (stack.pop());
        stack.push(a - b);
    } else if (token === "*") {
         a = parseFloat (stack.pop());
         b = parseFloat (stack.pop());
        stack.push(a * b);
    } else if (token === "/") {
         a = parseFloat (stack.pop());
         b = parseFloat (stack.pop());
        stack.push(a / b);
    } else if (token === "^") {
         a = parseFloat (stack.pop());
         b = parseFloat (stack.pop());
        stack.push(Math.pow(a, b));
    } else {
        throw new Error("Invalid Input")
    }
}

//by this the stack should only have the final value
    if (stack.length > 1) {
        console.log(stack)
        throw new Error("INVALID Input")
    } else {
        console.log(stack[0])
    }