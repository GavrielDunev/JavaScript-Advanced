function solve() {
    let firstNum;
    let secondNum;
    let result;
    return {
        init: (s1, s2, res) => {
            firstNum = document.querySelector(s1);
            secondNum = document.querySelector(s2);
            result = document.querySelector(res);
        },
        add: () => {
            result.value = Number(firstNum.value) + Number(secondNum.value);
        }, 
        subtract: () => {
            result.value = Number(firstNum.value) - Number(secondNum.value);
        }
    }
}
let obj = solve();
obj.init('#num1', '#num2', '#result');
let add = obj.add;
let subtract = obj.subtract;