function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

const describe = require('mocha').describe;
const {assert} = require('chai');

describe('Test isOddOrEven', () => {
    it('Returns undefined when not a string', () => {
        assert.isUndefined(isOddOrEven(['a']));
    });

    it('Returns when even to even string', () => {
        assert.equal(isOddOrEven('ab'), 'even');
    });

    it('Returns when odd to odd string', () => {
        assert.equal(isOddOrEven('abc'), 'odd');
    });
});