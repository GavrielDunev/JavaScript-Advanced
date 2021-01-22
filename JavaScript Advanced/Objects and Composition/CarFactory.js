function factory(obj) {
    const engines = [
        {
            power: 90, volume: 1800
        },
        {
            power: 120, volume: 2400
        },
        {
            power: 200, volume: 3500
        }
    ];

    const car = {};
    car.model = obj.model;
    car.engine = engines.filter(en => en.power >= obj.power)[0];
    car.carriage = {
        type: obj.carriage,
        color: obj.color
    };
    car.wheels = Array(4).fill(obj.wheelsize % 2 == 0 ? obj.wheelsize - 1 : obj.wheelsize);
    return car;
}

console.log(factory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));