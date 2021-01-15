function cook(number, com1, com2, com3, com4, com5) {
let commands = [com1, com2, com3, com4, com5];
for (let i = 0; i < commands.length; i++) {
    if (commands[i] == 'chop') {
        number /= 2;
    } else if (commands[i] == 'dice') {
        number = Math.sqrt(number);
    } else if (commands[i] == 'spice') {
        number++;
    } else if (commands[i] == 'bake') {
        number *= 3;
    } else if (commands[i] == 'fillet') {
        number = number - number * 0.2;
    }
    
    console.log(number);
}
}

cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');