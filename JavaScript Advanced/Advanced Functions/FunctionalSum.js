function add(number) {
    let sum = 0;
    return total(number);
    function total(number) {
        sum += number;
        total.toString = function () { return sum };
        return total;
    }
}

console.log(add(1)(6)(-3));