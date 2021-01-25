function generateReport() {
    const outputEl = document.querySelector('#output');
    let head = document.querySelectorAll('tr th');
    let body = document.querySelectorAll('tbody tr');

    let output = [];

    for (const row of body) {
        let currentObject = {};
        for (let i = 0; i < row.children.length; i++) {
            let key = head[i].lastChild.name;
            let cell = row.children[i].textContent;
            if (head[i].lastChild.checked) {
                currentObject[key] = cell;
            }
        }
        output.push(currentObject);
    }
    outputEl.textContent = JSON.stringify(output);
}