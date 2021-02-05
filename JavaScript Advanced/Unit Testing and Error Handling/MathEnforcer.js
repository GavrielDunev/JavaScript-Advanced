let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

const describe = require('mocha').describe;
const {assert} = require('chai');

describe('Test mathEnforcer', () => {
    describe('Test addFive', () => {
        it('Returns undefined when not a number param', () => {
            assert.isUndefined(mathEnforcer.addFive('a'));
        });

        it('Returns 10 when given 5', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        });

        it('Returns 7.5 when given 2.5', () => {
            assert.closeTo(mathEnforcer.addFive(2.5), 7.5, 0.01);
        });

        it('Returns 3 when given -2', () => {
            assert.equal(mathEnforcer.addFive(-2), 3);
        });
    });

    describe('Test subtractTen', () => {
        it('Returns undefined when not a number param', () => {
            assert.isUndefined(mathEnforcer.subtractTen('a'));
        });

        it('Returns 10 when given 20', () => {
            assert.equal(mathEnforcer.subtractTen(20), 10);
        });

        it('Returns -15 when given -5', () => {
            assert.equal(mathEnforcer.subtractTen(-5), -15);
        });

        it('Returns 0.5 when given 10.5', () => {
            assert.closeTo(mathEnforcer.subtractTen(10.5), 0.5, 0.01);
        });
    });

    describe('Test sum', () => {
        it('Returns undefined when first param is not a number', () => {
            assert.isUndefined(mathEnforcer.sum('a', 1));
        });

        it('Returns undefined when second param is not a number', () => {
            assert.isUndefined(mathEnforcer.sum(2, 'b'));
        });

        it('Returns 5 when given 2 and 3', () => {
            assert.equal(mathEnforcer.sum(2, 3), 5);
        });

        it('Returns -25 when given -5 and -20', () => {
            assert.equal(mathEnforcer.sum(-5, -20), -25);
        });

        it('Returns 20.9 when given 10.5 and 10.4', () => {
            assert.closeTo(mathEnforcer.sum(10.5, 10.4), 20.9, 0.01);
        });
    });
});