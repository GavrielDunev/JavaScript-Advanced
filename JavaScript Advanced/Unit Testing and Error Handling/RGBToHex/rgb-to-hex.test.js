const rgbToHex = require('./rgb-to-hex');
const { expect } = require('chai');
const rgbToHexColor = require('./rgb-to-hex');

describe('Test rgb to hex', () => {
    it ('Takes invalid type', () => {
        expect(rgbToHexColor('a', 2, 3)).to.be.undefined;
    });

    it ('Takes invalid type', () => {
        expect(rgbToHexColor(4, 'c', 3)).to.be.undefined;
    });

    it ('Takes invalid type', () => {
        expect(rgbToHexColor(4, 1, 'p')).to.be.undefined;
    });

    it ('Takes number < 0', () => {
        expect(rgbToHexColor(-2, 200, 0)).to.be.undefined;
    });

    it ('Takes number < 0', () => {
        expect(rgbToHexColor(5, -200, 0)).to.be.undefined;
    });

    it ('Takes number < 0', () => {
        expect(rgbToHexColor(2, 200, -6)).to.be.undefined;
    });

    it ('Takes number > 255', () => {
        expect(rgbToHexColor(25, 257, 0)).to.be.undefined;
    });

    it ('Takes number > 255', () => {
        expect(rgbToHexColor(257, 254, 0)).to.be.undefined;
    });

    it ('Takes number > 255', () => {
        expect(rgbToHexColor(255, 254, 300)).to.be.undefined;
    });
    
    it ('Returns 66, 102, 245 to hex', () => {
        expect(rgbToHexColor(66, 102, 245)).to.equal('#4266F5');
    });0, 0, 0

    it ('Returns 0, 0, 0 to hex', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it ('Returns 255, 255, 255 to hex', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
});