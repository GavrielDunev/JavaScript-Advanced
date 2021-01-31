function solve(area, vol, input) {
    const objects = JSON.parse(input);
    const result = [];
    for (let obj of objects) {
        const objArea = area.call(obj);
        const objVol = vol.call(obj);

        const output = {
            area: objArea,
            volume: objVol
        };
        result.push(output);
    }

    return result;
    }

console.log(solve(area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]'
    ));

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};