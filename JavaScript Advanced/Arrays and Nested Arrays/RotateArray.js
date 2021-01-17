function rotate(arr, count) {
    for (let i = 0; i < count; i++) {
        const element = arr.pop();
        arr.unshift(element);
    }

    return arr.join(' ');
}

console.log(rotate(['1', 
'2', 
'3', 
'4'], 
2
));