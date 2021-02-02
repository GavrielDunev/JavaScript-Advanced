function sum(arr, start, end) {
    if (!Array.isArray(arr) || arr.some(n => typeof n != 'number')) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > arr.length - 1) {
        end = arr.length - 1;
    }

    return arr.slice(start, end + 1).reduce((acc, curr) => acc + curr, 0);
}

console.log(sum([10, 'twenty', 30, 40], 0, 2));