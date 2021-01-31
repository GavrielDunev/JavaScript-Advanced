function cars(input) {
    const objects = [];
    
        const commands = {
            create: (input) => {
                let name = input[0];
                if (input.length == 1) {
                    objects[name] = {};
                } else {
                    let parent = input[2];
                    objects[name] = Object.create(objects[parent]);
                }
            },
            set: (input) => {
                let [name, key, value] = input;
                objects[name][key] = value;
            },
            print: (input) => {
                let name = input[0];
                let result = '';
                for (const key in objects) {
                    if (key == name) {
                        for (const current in objects[key]) {
                            result += (`${current}:${objects[key][current]}`) + ', ';
                        }
                    }
                    
                }
                console.log(result.slice(0, result.length - 2));
            }
        }

    for (const current of input) {
        let command = current.split(' ')[0];
        commands[command](current.split(' ').slice(1));
    }
    
};

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);