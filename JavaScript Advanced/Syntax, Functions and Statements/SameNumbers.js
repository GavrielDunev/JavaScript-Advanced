function sameNums(input) {
    let numAsString = input + '';
    let areSame = true;
    let totalSum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        if (numAsString[0] !== numAsString[i]) {
            areSame = false;
        }
        totalSum += Number(numAsString[i]);
    }
    
    return `${areSame}\n${totalSum}`
}

console.log(sameNums(2222222));
console.log(sameNums(1234));
