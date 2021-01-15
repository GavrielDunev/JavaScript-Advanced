function produce(input) {
    let result = [];
    for (const num of input) {
        if (num < 0) {
            result.unshift(num);
        } else {
        result.push(num);
        }
    }
    return result.join('\n');
}

console.log(produce([7, -2, 8, 9]));
console.log(produce([3, -2, 0, -1]));