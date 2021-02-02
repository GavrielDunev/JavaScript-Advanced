const sum = require('./sumOfNumbers');
const { expect } = require('chai');

describe('Test sum of one num', function () {
    it('Take an array of numbers', function() {
        expect(sum([1])).to.equal(1);
    });

    it('Take an array of more numbers', function() {
        expect(sum([1, 2, 3])).to.equal(6);
    });

    it('Take an array of more samo numbers', function() {
        expect(sum([1, 1, 1])).to.equal(3);
    });
});