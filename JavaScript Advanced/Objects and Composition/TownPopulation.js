function towns(array) {
    const result = {};
    for (const tuple of array) {
        const tokens = tuple.split(' <-> ');
        const town = tokens[0];
        let population = Number(tokens[1]);
        if (result[town] != undefined) {
            population += Number(result[town]);
        }
        result[town] = population;
    }

    for (const key in result) {
        console.log(`${key} : ${result[key]}`)
    }
}

towns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']

);