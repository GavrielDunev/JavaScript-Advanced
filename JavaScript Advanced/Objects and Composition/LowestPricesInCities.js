function lowest(input) {
    const result = {};

    for (const iterator of input) {
        let [town, product, price] = iterator.split(' | ');
        price = Number(price);

        if (!result[product]) {
            result[product] = { town, price };
        } else if (result[product].town === town) {
            result[product].price = price;
        } else {
            if (result[product].price > price) {
                result[product].town = town;
                result[product].price = price;
            }
        }
    }
    
    for (const key in result) {
        console.log(`${key} -> ${result[key].price} (${result[key].town})`)
    }
}

lowest(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);