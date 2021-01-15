function sequence(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let count = k;
        let sum = 0;
        for (let m = i - 1; m >= 0; m--) {
            if (count > 0) {
                sum += result[m];
                count--;
            }
        }
        result.push(sum);
    }
    return result;
}

console.log(sequence(6, 3));