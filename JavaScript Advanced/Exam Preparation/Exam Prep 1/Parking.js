class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity == 0) {
            throw new Error('Not enough parking space.');
        }
        this.capacity--;
        this.vehicles.push({
            carModel,
            carNumber,
            payed: false
        });

        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let found = this.vehicles.findIndex(c => c.carNumber == carNumber);
        if (found == -1) {
            throw new Error("The car, you're looking for, is not found.");
        }

        if (!this.vehicles[found].payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        this.capacity++;
        this.vehicles.splice(found, 1);
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let found = this.vehicles.findIndex(c => c.carNumber == carNumber);
        if (found == -1) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (this.vehicles[found].payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        this.vehicles[found].payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        let result = '';
        if (!carNumber) {
            result += `The Parking Lot has ${this.capacity} empty spots left.\n`;
            this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            result += this.vehicles.map(v => `${v.carModel} == ${v.carNumber} - ${v.payed ? 'Has payed' : 'Not payed'}`).join('\n');
        } else {
            let found = this.vehicles.find(c => c.carNumber == carNumber);
            result = `${found.carModel} == ${found.carNumber} - ${found.payed ? 'Has payed' : 'Not payed'}`
        }
        return result;
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));