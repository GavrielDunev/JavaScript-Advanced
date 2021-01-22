function table(input) {
    const result = [];
    let [headings, ...rows] = input;
    headings = headings.split('|').filter(el => el !== '').map(val => val.trim());
    for (let row of rows) {
        row = row.split('|').filter(el => el !== '').map(val => val.trim());
        const obj = {};
        obj[headings[0]] = row[0];
        obj[headings[1]] = Number(Number(row[1]).toFixed(2));
        obj[headings[2]] = Number(Number(row[2]).toFixed(2));
        result.push(obj);
    }
    return JSON.stringify(result);
}

console.log(table(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));