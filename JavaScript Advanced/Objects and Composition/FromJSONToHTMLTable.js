function transform(json) {
    let arr = JSON.parse(json);
    let output = ['<table>'];
    output.push(makeKeyRow(arr));
    arr.forEach(obj => output.push(makeValueRow(obj)));
    output.push('</table>');
    console.log(output.join('\n'));

    function makeKeyRow(arr) {
        const headings = Object.keys(arr[0]);
        let result = '   <tr>';
        for (const heading of headings) {
            result += '<th>' + heading + '</th>';
        }
        return result + '</tr>';
    }

    function makeValueRow(obj){
        const entries = Object.values(obj);
        let result = '   <tr>';
        for (let entry of entries) {
            entry = escapeHtml(entry);
            result += '<td>' + entry + '</td>';
        }
        return result + '</tr>';
    }

    function escapeHtml(value) {
        return value.toString().replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }
}
let data = '[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]';
transform(data);