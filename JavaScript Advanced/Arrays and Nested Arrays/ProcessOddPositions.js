function process(input) {
    return input.filter((a, i) => i % 2 !== 0)
    .map(a => a * 2)
    .reverse()
    .join(' ');
}

console.log(process([3, 0, 10, 4, 7, 3]));