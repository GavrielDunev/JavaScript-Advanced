function section(arr, first, last) {
const start = arr.indexOf(first);
const end = arr.indexOf(last);

return arr.slice(start, end + 1);
}

console.log(section(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));