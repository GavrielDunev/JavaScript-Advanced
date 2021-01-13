function stringLength(str1, str2, str3) {
    let totalSumLength = str1.length + str2.length + str3.length;
    let averageLength = Math.floor(totalSumLength / 3);
    console.log(totalSumLength);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');