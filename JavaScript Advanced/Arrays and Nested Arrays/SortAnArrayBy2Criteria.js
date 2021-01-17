function sort(arr) {
    arr.sort((a, b) => {
        let result = a.length - b.length;
        if (result === 0) {
            result = a.localeCompare(b);
        }
        return result;
    });

    return arr.join('\n');
}

console.log(sort(['alpha', 
'beta', 
'gamma']
));