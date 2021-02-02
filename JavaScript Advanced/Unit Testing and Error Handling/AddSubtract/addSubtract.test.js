const createCalculator = require('./addSubtract');
const { expect } = require('chai');

describe("createCalculator()", function () {
    let calc;
 
    beforeEach(function () {
        calc = createCalculator();
    });
 
    it('Returns 0 to get', function () {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });

    it('Returns 5 when add(2), add(3)', function () {
        calc.add(2);
        calc.add(3);
        let value = calc.get();
        expect(value).to.be.equal(5);
    });

    it('Returns -5 when subtract(3), subtract(2)', function () {
        calc.subtract(3);
        calc.subtract(2);
        let value = calc.get();
        expect(value).to.be.equal(-5);
    });

    it('Returns 4.2 when add(5.3), subtract(1.1)', function () {
        calc.add(5.3);
        calc.subtract(1.1);
        let value = calc.get();
        expect(value).to.be.equal(5.3 - 1.1);
    });

    it("Returns 2 when add(10), subtract('7'), add('-2'), subtract(-1)", function () {
        calc.add(10);
        calc.subtract('7');
        calc.add('-2');
        calc.subtract(-1);
        let value = calc.get();
        expect(value).to.be.equal(2);
    });

    it('Returns NaN to add(string)', function () {
        calc.add('hello');
        let value = calc.get();
        expect(value).to.be.NaN;
    });

    it("Returns NanN to subtract(string)", function () {
        calc.subtract('hello');
        let value = calc.get();
        expect(value).to.be.NaN;
    });
});