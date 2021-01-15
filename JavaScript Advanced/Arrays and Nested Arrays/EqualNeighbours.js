function equal(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let t = 0; t < matrix[i].length; t++) {
            let element = matrix[i][t];
            let down = '';
            if (i < matrix.length - 1) {
                down = matrix[i + 1][t];
            }
            let right = '';
            if (t < matrix[i].length - 1) {
                right = matrix[i][t + 1];
            }
            if (element == down) {
                count++;
            }
            if (element == right) {
                count++;
            }
        }
    }
    return count;
}

console.log(equal([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));