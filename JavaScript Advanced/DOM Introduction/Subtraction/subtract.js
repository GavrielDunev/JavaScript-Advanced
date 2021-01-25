function subtract() {
 const firstNum = document.querySelector('#firstNumber').value;
 const secondNum = document.querySelector('#secondNumber').value;
document.querySelector('#result').textContent = Number(firstNum) - Number(secondNum);
}