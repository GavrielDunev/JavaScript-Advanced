function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

const describe = require('mocha').describe;
const {assert} = require('chai');

describe('Test lookupChar', () => {
    it('Returns underfined when first param is not a string', () => {
        assert.isUndefined(lookupChar(1, 0));
    });

    it('Returns underfined when second param is not a number', () => {
        assert.isUndefined(lookupChar('a', 'b'));
    });

    it('Returns underfined when second param is not an integer', () => {
        assert.isUndefined(lookupChar('a', 2.5));
    });

    it('Returns incorrect index when second param < 0', () => {
        assert.equal(lookupChar('a', -2), 'Incorrect index');
    });

    it('Returns incorrect index when second param > string.length', () => {
        assert.equal(lookupChar('abc', 5), 'Incorrect index');
    });

    it('Returns correct char', () => {
        assert.equal(lookupChar('abc', 1), 'b');
    });
});