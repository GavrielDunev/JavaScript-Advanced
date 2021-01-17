function sort(nums){
    nums.sort((a, b) => a - b);
    let result = [];
    while (nums.length) {
        result.push(nums.shift());
        result.push(nums.pop());
    }
    return result;
}

console.log(sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));