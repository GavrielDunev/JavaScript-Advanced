function convert(input) {
    let result = input.toUpperCase()
        .match(/\w+/g)
        .join(', ');

        console.log(result);
}

convert('Hi, how are you?');
convert('Functions in JS can be nested, i.e. hold other functions');