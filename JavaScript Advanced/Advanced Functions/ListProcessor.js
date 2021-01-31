function processor(arr) {
    let result = [];
    const executor = {
        add: (word) => {
            result.push(word);
        },
        remove: (word) => {
            result = result.filter(el => el != word);
        },
        print: () => {
            console.log(result.join(','));
        }
    }

    for (let current of arr) {
        let [command, word] = current.split(' ');
        executor[command](word);
    }
}

processor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);