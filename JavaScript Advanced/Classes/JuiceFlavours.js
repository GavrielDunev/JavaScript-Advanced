function juice(input) {
    let storage = new Map();
    let bottles = new Map();
    for (let current of input) {
        let [juice, quantity] = current.split(' => ');
        if (storage.has(juice)) {
            storage.set(juice, storage.get(juice) + Number(quantity));
            if (storage.get(juice) >= 1000) {
                bottles.set(juice, Math.floor((storage.get(juice) / 1000)));
            }
        } else {
            storage.set(juice, Number(quantity));
            if (storage.get(juice) >= 1000) {
                bottles.set(juice, Math.floor((storage.get(juice) / 1000)));
            }
        }
    }

    for (let [key, value] of bottles.entries()) {
        console.log(`${key} => ${value}`);
    }
}

juice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);