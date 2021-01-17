function everyNth(array, step){
    let result = array.filter((el, i) => i % step == 0);
    return result;
}

console.log(everyNth(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));