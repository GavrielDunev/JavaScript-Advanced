function magical(matrix) {
    let sumOfRows = [];
    let sumOfCols = [];
    for (let r = 0; r < matrix.length; r++) {
        let currRowSum = 0;
        for (let c = 0; c < matrix.length; c++) {
            currRowSum += matrix[r][c];
        }
        sumOfRows.push(currRowSum);
    }

    for (let c = 0; c < matrix.length; c++) {
        let currColSum = 0;
        for (let r = 0; r < matrix.length; r++) {
            currColSum += matrix[r][c];
        }
        sumOfCols.push(currColSum);
    }

   return sumOfRows.concat(sumOfCols).every((num, i, arr) => num === arr[0]);
}

console.log(magical([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));