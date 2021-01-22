function compose(input) {
    const result = {};
    for (let i = 0; i < input.length; i += 2) {
        result[input[i]] = Number(input[i + 1]);
    }
    console.log(result);
}

compose(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);