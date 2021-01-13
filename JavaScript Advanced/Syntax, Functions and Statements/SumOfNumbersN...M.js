function sumOfNums(val1, val2) {
let startNum = Number(val1);
let endNum = Number(val2);
let sum = 0;
for (let i = startNum; i <= endNum; i++) {
    sum += i;
}
return sum;
}

console.log(sumOfNums('1', '5'));