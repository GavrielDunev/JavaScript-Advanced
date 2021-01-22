function catalogue(input) {
    const output = [];
for (const iterator of input) {
    let [name, price] = iterator.split(' : ');
    price = Number(price);
    if (output[name[0]]) {
        output[name[0]].push({name, price})
        output[name[0]].sort((a, b) => a.name.localeCompare(b.name));
    } else {
        output[name[0]] = [{name, price}];
    }
}
let sorted = Object.keys(output);
sorted.sort((a, b) => a.localeCompare(b));

for (const key of sorted) {
    console.log(key);
    for (const prod of output[key]) {
        console.log(`  ${prod.name}: ${prod.price}`)
    };
};
}

catalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);