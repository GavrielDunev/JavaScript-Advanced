function solve(arr) {
    let result = [1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'add' && i !== 0) {
            result.push(i + 1);
        } else if (arr[i] == 'remove') {
            result.pop();
        }
    }
    if(result.length == 0) {
        return 'Empty';
    }
    return result.join('\n');
}

console.log(solve(['remove', 
'remove', 
'remove']
));