function smallest(input) {
    input.sort((a, b) => a - b);
    const first = input.shift();
    const second = input.shift();
    return first + ' ' + second;
}

console.log(smallest([30, 15, 50, 5]));
console.log(smallest([3, 0, 10, 4, 7, 3]));
