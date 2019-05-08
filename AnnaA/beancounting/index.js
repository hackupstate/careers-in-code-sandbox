function countBs(str) {
    //initialize caseCount to zero
    var caseCount = 0;
    /* sets i to 0, checks condition, increment i */
    for (var i = 0; i < str.length; i ++){
        if (str.charAt(i) === "B")
        //checks if letter @ index position i is B
            caseCount ++;
    }
    return caseCount
}

function countChar(str, char) {
    var caseCount=0;
    for (var i = 0; i < str.length; i ++){
        if (str.charAt(i) === char)
            caseCount++;
    }
    return caseCount;
}
console.log (countBs('BBc'));
console.log(countChar("kakkerlak", "k"));


