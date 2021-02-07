class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value    
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

const describe = require('mocha').describe;
const { assert } = require('chai');

describe('Test PaymentPackage', () => {
    let paymentPackage = undefined;
    beforeEach(() => {
        paymentPackage = new PaymentPackage('Gosho', 10);
    })

    it('Test instance', () => {
        assert.isNotEmpty(paymentPackage.name);
        assert.isString(paymentPackage.name);
        assert.isNumber(paymentPackage.value);
        assert.isTrue(paymentPackage.value >= 0);
        assert.isNumber(paymentPackage.VAT);
        assert.isTrue(paymentPackage.VAT >= 0);
        assert.isBoolean(paymentPackage.active);
    })

    it ('Test name', () => {
        assert.equal('Gosho', paymentPackage.name);
        paymentPackage.name = 'Pesho';
        assert.equal('Pesho', paymentPackage.name);
        assert.throw(() => {paymentPackage.name = 0}, 'Name must be a non-empty string');
        assert.throw(() => {paymentPackage.name = ''}, 'Name must be a non-empty string');
    })

    it ('Test value', () => {
        assert.equal(10, paymentPackage.value);
        paymentPackage.value = 20;
        assert.equal(20, paymentPackage.value);
        assert.throw(() => {paymentPackage.value = '3'}, 'Value must be a non-negative number');
        assert.throw(() => {paymentPackage.value = -2}, 'Value must be a non-negative number');
        assert.doesNotThrow(() => {paymentPackage.value = 0}, 'Value must be a non-negative number');
    })

    it ('Test VAT', () => {
        assert.equal(20, paymentPackage.VAT);
        paymentPackage.VAT = 30;
        assert.equal(30, paymentPackage.VAT);
        assert.throw(() => {paymentPackage.VAT = '3'}, 'VAT must be a non-negative number');
        assert.throw(() => {paymentPackage.VAT = -2}, 'VAT must be a non-negative number');
        assert.doesNotThrow(() => {paymentPackage.VAT = 0}, 'VAT must be a non-negative number');
    })

    it ('Test active', () => {
        assert.equal(true, paymentPackage.active);
        paymentPackage.active = false;
        assert.equal(false, paymentPackage.active);
        assert.throw(() => {paymentPackage.active = 'yes'}, 'Active status must be a boolean');
    })

    it ('Test toString', () => {
        let expected = [
            `Package: Gosho`,
            `- Value (excl. VAT): 10`,
            `- Value (VAT 20%): 12`
        ];
        assert.equal(paymentPackage.toString(), expected.join('\n'));
        paymentPackage.active = false;
        expected = [
            `Package: Gosho (inactive)`,
            `- Value (excl. VAT): 10`,
            `- Value (VAT 20%): 12`
        ];
        assert.equal(paymentPackage.toString(), expected.join('\n'));
    })
})