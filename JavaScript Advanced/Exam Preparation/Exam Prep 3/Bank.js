class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer({ firstName, lastName, personalId }) {
        if (this.allCustomers.some(c => c.firstName == firstName && c.lastName == lastName && c.personalId == personalId) == true) {
            throw new Error(`${firstName} ${lastName} is already our customer!`)
        }
        let customer = { firstName, lastName, personalId };
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        let person = this.allCustomers.find(c => c.personalId == personalId);
        if (!person) {
            throw new Error('We have no customer with this ID!');
        }
        if (!person.totalMoney) {
            person.totalMoney = amount;
        } else {
            person.totalMoney += amount;
        }

        if (!person.transactions) {
            person.transactions = [];
        }

        person.transactions.push(`${person.firstName} ${person.lastName} made deposit of ${amount}$!`)

        return `${person.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {
        let person = this.allCustomers.find(c => c.personalId == personalId);
        if (!person) {
            throw new Error('We have no customer with this ID!');
        }
        if (person.totalMoney < amount) {
            throw new Error(`${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`);
        }
        person.totalMoney -= amount;
        person.transactions.push(`${person.firstName} ${person.lastName} withdrew ${amount}$!`);
        return `${person.totalMoney}$`
    }

    customerInfo(personalId) {
        let person = this.allCustomers.find(c => c.personalId == personalId);
        if (!person) {
            throw new Error('We have no customer with this ID!');
        }
        let result = [];
        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${person.firstName} ${person.lastName}`);
        result.push(`Customer ID: ${personalId}`);
        result.push(`Total Money: ${person.totalMoney}$`);
        result.push('Transactions:');
        for (let i = person.transactions.length - 1; i >= 0; i--) {
            result.push(`${i + 1}. ` + person.transactions[i]);
        }
        return result.join('\n');
    }
}

let bank = new Bank('SoftUni Bank');

let c1 = bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 });
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));
console.log(c1.firstName);
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

