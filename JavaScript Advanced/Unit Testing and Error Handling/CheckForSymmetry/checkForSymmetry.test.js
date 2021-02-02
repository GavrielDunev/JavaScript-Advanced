const isSymmetric = require('./checkForSymmetry');
const { expect } = require('chai'); 

describe('Test is symmetric', () => {
    it ('Takes an array as input', () => {
        expect(isSymmetric([1])).to.be.true;
    });

    it ('Takes non-array as input', () => {
        expect(isSymmetric('1, 2')).to.be.false;
    });

    it ('Takes a symmetric array', () => {
        expect(isSymmetric(['a', 'a', 'a'])).to.be.true;
    });

    it ('Takes a non-symmetric array of strings', () => {
        expect(isSymmetric(['a', 'd', 'c'])).to.be.false;
    });

    it ('Takes a non-symmetric array of nums', () => {
        expect(isSymmetric([2, 1, 7])).to.be.false;
    });

    it ('Takes a non-symmetric array of nums and strings', () => {
        expect(isSymmetric([1, '1'])).to.be.false;
    });
});