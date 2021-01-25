function sumTable() {
    let rows = [...document.querySelectorAll('table tr')];
    rows = rows.slice(1, -1);
    let sum = 0;
    for (const row of rows) {
        let cols = row.children;
        sum += Number(cols[cols.length - 1].textContent);
    }
    document.getElementById('sum').textContent = sum;
}