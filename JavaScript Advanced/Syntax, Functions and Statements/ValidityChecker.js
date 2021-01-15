function checkValidity(x1, y1, x2, y2) {
    let firstDistance = 'invalid';
    if (Number.isInteger(Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2))) {
        firstDistance = 'valid';
    }
    let secondDistance = 'invalid';
    if (Number.isInteger(Math.sqrt((0 - x2) ** 2 + (0 - y2) ** 2))) {
        secondDistance = 'valid';
    }
    let thirdDistance = 'invalid';
    if (Number.isInteger(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2))) {
        thirdDistance = 'valid';
    }
    
    console.log(`{${x1}, ${y1}} to {0, 0} is ${firstDistance}\n{${x2}, ${y2}} to {0, 0} is ${secondDistance}\n{${x1}, ${y1}} to {${x2}, ${y2}} is ${thirdDistance}`)
}

checkValidity(3, 0, 0, 4);
checkValidity(2, 1, 1, 1);