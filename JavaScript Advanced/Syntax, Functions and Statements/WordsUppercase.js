function convert(input) {
words = input.split(' ');
let output = '';
words = words.split('.');
for (let i = 0; i < words.length; i++) {
    let current = words[i].replace(',', '').toUpperCase();
    while (current.charAt(current.length - 1) == '!'
    || current.charAt(current.length - 1) == ','
    || current.charAt(current.length - 1) == '?'
    || current.charAt(current.length - 1) == '.') {
        current = current.substring(0, current.length - 1);
    }
    output = (output + current + ', ');
    
}
console.log(output.substring(0, output.length - 2));
}

convert('Hi, how are you?');
convert('Functions in JS can be nested, i.e. hold other functions');