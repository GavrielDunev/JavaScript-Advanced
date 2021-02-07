function cars(input) {
    const cars = [];
    for (let carInput of input) {
        let [brand, model, quantity] = carInput.split(' | ');
        if (cars[brand]) {
            if (cars[brand][model]) {
                cars[brand][model] = cars[brand][model] + Number(quantity);
            } else {
                cars[brand][model] = Number(quantity);
            }
        } else {
            cars[brand] = [];
            cars[brand][model] = Number(quantity);
        }
    }
    
    for (let brand in cars) {
        let result = `${brand}\n`;
        for (let model in cars[brand]) {
            result += `###${model} -> ${cars[brand][model]}\n`
        }
        console.log(result.trim());
    }
}

cars(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);