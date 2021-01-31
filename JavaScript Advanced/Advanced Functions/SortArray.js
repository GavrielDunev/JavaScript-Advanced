function sort(numbers, order) {
    const types = {
        asc: (arr) => {
            return arr.sort((a, b) => a - b);
        },
        desc: (arr) => {
            return arr.sort((a, b) => b - a);
        }
    }
    return types[order](numbers);
}

console.log(sort([14, 7, 17, 6, 8], 'asc'));