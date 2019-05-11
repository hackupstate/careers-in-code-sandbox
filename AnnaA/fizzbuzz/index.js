
var theNumber=0;
while (theNumber<100){
    theNumber++;
    if (theNumber%3==0 && theNumber%5==0){
        console.log("FizzBuzz");
    }
    else if(theNumber%5==0){
        console.log("Buzz")
    }
    else if(theNumber%3==0){
        console.log("Fizz")
    } 
    else{
        console.log(theNumber);
    }
}