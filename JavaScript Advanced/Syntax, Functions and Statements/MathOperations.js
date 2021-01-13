function mathOperation(firstNum, secondNum, operator){
    let result;
    if (operator == '+') {
        result = firstNum + secondNum;
    } else if (operator == '-') {
        result = firstNum - secondNum;
    } else if (operator == '*') {
        result = firstNum * secondNum;
    } else if (operator == '/') {
        result = firstNum / secondNum;
    } else if (operator == '%') {
        result = firstNum % secondNum;
    } else if (operator == '**') {
        result = firstNum ** secondNum;
    }

    console.log(result);
}

mathOperation(5, 6, '+');
mathOperation(3, 5.5, '*');