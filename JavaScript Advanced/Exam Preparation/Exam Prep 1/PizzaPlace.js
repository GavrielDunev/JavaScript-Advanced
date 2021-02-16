let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}

let describe = require('mocha').describe;
let { assert } = require('chai');

describe("Test pizzUni", function () {

    it("Test makeAnOrder", function () {
        let firstOrder = { orderedPizza: undefined, orderedDrink: 'Cola' };
        let secondOrder = { orderedPizza: 'Peperoni' };
        let thirdOrder = { orderedPizza: 'Peperoni', orderedDrink: 'Cola' };
        assert.throw(() => pizzUni.makeAnOrder(firstOrder), 'You must order at least 1 Pizza to finish the order.');
        assert.equal(pizzUni.makeAnOrder(secondOrder), 'You just ordered Peperoni');
        assert.equal(pizzUni.makeAnOrder(thirdOrder), 'You just ordered Peperoni and Cola.');
    });

    it('Test getRemainingWork', function () {
        let firstStatusArr = [{ pizzaName: 'first', status: 'preparing' },
        { pizzaName: 'second', status: 'ready' }, { pizzaName: 'third', status: 'preparing' }];

        let secondStatusArr = [{ pizzaName: 'first', status: 'ready' },
        { pizzaName: 'second', status: 'ready' }];

        assert.equal(pizzUni.getRemainingWork(firstStatusArr), 'The following pizzas are still preparing: first, third.');
        assert.equal(pizzUni.getRemainingWork(secondStatusArr), 'All orders are complete!');
    });

    it('Test orderType', function () {
        assert.equal(pizzUni.orderType(50, 'Carry Out'), 45);
        assert.equal(pizzUni.orderType(50, 'Delivery'), 50);
    });
});
