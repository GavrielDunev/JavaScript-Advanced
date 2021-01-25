function extract(id) {
    let text = document.getElementById(id).textContent;
    let regex = /\((.+?)\)/gm;
    let output = [];
    let match = regex.exec(text);
    while (match) {
        output.push(match[1]);
        match = regex.exec(text);
    }
    return output.join('; ');
}