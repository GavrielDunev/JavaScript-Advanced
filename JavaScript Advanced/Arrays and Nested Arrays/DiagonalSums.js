function diagonals(matrix) {
    let main = 0;
    let secondary = 0;
    for (let i = 0; i < matrix.length; i++) {
        main += matrix[i][i];
        secondary += matrix[i][matrix.length - 1 - i];
    }

    return main + ' ' + secondary;
}

console.log(diagonals([[20, 40],
[10, 60]]
));