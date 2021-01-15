function biggest(matrix) {
    let biggestNum = matrix[0][0];
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            const element = matrix[i][k];
            if (element > biggestNum) {
                biggestNum = element;
            }
        }
    }

    return biggestNum;
}

console.log(biggest([[20, 50, 10],
[8, 33, 145]]
));