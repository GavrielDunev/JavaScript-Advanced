function gcd(firstNum, secondNum) {
while (firstNum !== secondNum) {
    if (firstNum > secondNum) {
        firstNum = firstNum - secondNum;
    } else if (secondNum > firstNum) {
        secondNum = secondNum - firstNum;
    }

}

return firstNum;
}

console.log(gcd(15, 5));
console.log(gcd(2154, 458));