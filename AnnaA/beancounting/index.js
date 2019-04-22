function countBs(str) {
    var caseCount = 0;
    for (var i = 0; i < str.length; i ++){
        if (str.charAt(i) === "B")
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


