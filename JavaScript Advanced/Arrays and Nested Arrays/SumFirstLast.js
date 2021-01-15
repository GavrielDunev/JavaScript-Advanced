function sum(input) {
    const first = Number(input.shift());
    const last = Number(input.pop());
    return first + last;
}

console.log(sum(['20', '30', '40']));