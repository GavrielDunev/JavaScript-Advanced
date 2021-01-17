function extract(arr) {
    return arr.reduce((result, current, index) => {
        if (result[result.length - 1] <= current || index == 0) {
            result.push(current);
        }
        return result;
    }, [])
}

console.log(extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));