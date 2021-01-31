function solution() {
    const elements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const commands = {
        restock: (microEl, quantity) => {
            elements[microEl] += Number(quantity);
            return 'Success';
        },
        prepare: (recipe, quantity) => {
            switch (recipe) {
                case 'apple':
                    return apple(quantity);
                case 'lemonade':
                    return lemonade(quantity)
                case 'burger':
                    return burger(quantity);
                case 'eggs':
                    return eggs(quantity);
                case 'turkey':
                    return turkey(quantity);
            }

            function apple(quantity) {
                let carbsNeeded = 1 * quantity;
                let flavourNeeded = 2 * quantity;
                if (elements.carbohydrate >= carbsNeeded && elements.flavour >= flavourNeeded) {
                    elements.carbohydrate -= carbsNeeded;
                    elements.flavour -= flavourNeeded;
                    return 'Success';
                } else {
                    let lessIngredient = '';
                    if (elements.carbohydrate < carbsNeeded) {
                        lessIngredient = 'carbohydrate';
                    } else {
                        lessIngredient = 'flavour';
                    }
                    return `Error: not enough ${lessIngredient} in stock`;
                }
            }

            function lemonade(quantity) {
                let carbsNeeded = 10 * quantity;
                let flavourNeeded = 20 * quantity;
                if (elements.carbohydrate >= carbsNeeded && elements.flavour >= flavourNeeded) {
                    elements.carbohydrate -= carbsNeeded;
                    elements.flavour -= flavourNeeded;
                    return 'Success';
                } else {
                    let lessIngredient = '';
                    if (elements.carbohydrate < carbsNeeded) {
                        lessIngredient = 'carbohydrate';
                    } else {
                        lessIngredient = 'flavour';
                    }
                    return `Error: not enough ${lessIngredient} in stock`;
                }
            }

            function burger(quantity) {
                let carbsNeeded = 5 * quantity;
                let flavourNeeded = 3 * quantity;
                let fatNeeded = 7 * quantity;
                if (elements.carbohydrate >= carbsNeeded && elements.flavour >= flavourNeeded && elements.fat >= fatNeeded) {
                    elements.carbohydrate -= carbsNeeded;
                    elements.flavour -= flavourNeeded;
                    elements.fat -= fatNeeded;
                    return 'Success';
                } else {
                    let lessIngredient = '';
                    if (elements.carbohydrate < carbsNeeded) {
                        lessIngredient = 'carbohydrate';
                    } else if (elements.fat < fatNeeded) {
                        lessIngredient = 'fat';
                    } else {
                        lessIngredient = 'flavour';
                    }
                    return `Error: not enough ${lessIngredient} in stock`;
                }
            }

            function eggs(quantity) {
                let proteinNeeded = 5 * quantity;
                let flavourNeeded = 1 * quantity;
                let fatNeeded = 1 * quantity;
                if (elements.protein >= proteinNeeded && elements.flavour >= flavourNeeded && elements.fat >= fatNeeded) {
                    elements.protein -= proteinNeeded;
                    elements.flavour -= flavourNeeded;
                    elements.fat -= fatNeeded;
                    return 'Success';
                } else {
                    let lessIngredient = '';
                    if (elements.protein < proteinNeeded) {
                        lessIngredient = 'protein';
                    } else if (elements.fat < fatNeeded) {
                        lessIngredient = 'fat';
                    } else {
                        lessIngredient = 'flavour';
                    }
                    return `Error: not enough ${lessIngredient} in stock`;
                }
            }

            function turkey(quantity) {
                let carbsNeeded = 10 * quantity;
                let proteinNeeded = 10 * quantity;
                let flavourNeeded = 10 * quantity;
                let fatNeeded = 10 * quantity;
                if (elements.protein >= proteinNeeded && elements.flavour >= flavourNeeded && elements.fat >= fatNeeded && elements.carbohydrate >= carbsNeeded) {
                    elements.carbohydrate -= carbsNeeded;
                    elements.protein -= proteinNeeded;
                    elements.flavour -= flavourNeeded;
                    elements.fat -= fatNeeded;
                    return 'Success';
                } else {
                    let lessIngredient = '';
                    if (elements.protein < proteinNeeded) {
                        lessIngredient = 'protein';
                    } else if (elements.carbohydrate < fatNeeded) {
                        lessIngredient = 'carbohydrate';
                    } else if (elements.fat < carbsNeeded) {
                        lessIngredient = 'fat';
                    } else {
                        lessIngredient = 'flavour';
                    }
                    return `Error: not enough ${lessIngredient} in stock`;
                }
            }
        },
        report: () => {
            let result = '';
            Object.keys(elements).forEach(p => result += `${p}=${elements[p]} `);
            return result.trim();
        }
    }

    return (input) => {
        if (!input) {
            return commands.report;
        }
        let [command, microEl, quantity] = input.split(' ');
        return commands[command](microEl, quantity);
    }
}

let manager = solution();
console.log(manager("restock flavour 50"));  // Success
console.log(manager("prepare lemonade 4"));  // Error: not enough carbohydrate in stock