function findEven(input) {
    let result = '';

    for(let i = 0; i < input.length; i = i + 2) {
        result += input[i] + ' ';
    }

    console.log(result);
}

findEven(['20', '30', '40', '50', '60']);