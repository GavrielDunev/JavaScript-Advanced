function solution(input) {
    let previous = input;
    return function add(number) {
        let result = previous + number;
        return result;
    }
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));