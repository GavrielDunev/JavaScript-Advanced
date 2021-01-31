function info(...args) {
    let summary = [];
    for (let current of args) {
        displayInfo(current);
    }

    function displayInfo(argument) {
        let type = typeof argument;
        console.log(`${type}: ${argument}`);
        if (summary[type]) {
            summary[type] = summary[type] + 1;
        } else {
            summary[type] = 1;
        }
    }

    Object.keys(summary).sort((a, b) => summary[b] - summary[a]).forEach(el => console.log(`${el} = ${summary[el]}`));
}

info({ name: 'bob' }, 3.333, 9.999);