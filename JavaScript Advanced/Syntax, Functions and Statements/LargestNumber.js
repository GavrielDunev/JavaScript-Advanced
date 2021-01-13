function findLargestNum(num1, num2, num3) {
    let largestNumber;
    if (num1 > num2 && num1 > num3) {
        largestNum = num1;
    } else if (num2 > num1 && num2 > num3) {
        largestNum = num2;
    } else {
        largestNum = num3;
    }

    console.log(`The largest number is ${largestNum}.`);
}

findLargestNum(5, -3, 16);
findLargestNum(-3, -5, -22.5);