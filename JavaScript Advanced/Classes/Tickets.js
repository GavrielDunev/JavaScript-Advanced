function tickets(ticketDesc, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const result = [];
    ticketDesc.forEach(t => {
        let [destination, price, status] = t.split('|');
        const current = new Ticket(destination, price, status);
        result.push(current);
    });

    
    const sorter = {
        destination: (a, b) => {
            return a.destination.localeCompare(b.destination);
        },
        price: (a, b) => {
            return a.price - b.price;
        },
        status: (a, b) => {
            return a.status.localeCompare(b.status);
        }
    };

    return result.sort(sorter[sortCriteria]);
}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));