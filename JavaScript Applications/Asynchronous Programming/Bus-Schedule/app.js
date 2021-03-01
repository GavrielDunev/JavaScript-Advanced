function solve() {

    let stop = {
        next: 'depot'
    }

    const arriveButton = document.querySelector('#arrive');
    const departButton = document.querySelector('#depart');
    const info = document.querySelector('#info span');

    async function depart() {
        const response = await fetch ('http://localhost:3030/jsonstore/bus/schedule/' + stop.next);
        const data = await response.json();
        stop = data;
        departButton.disabled = true;
        arriveButton.disabled = false;

        info.textContent = `Next stop ${data.name}`;
    }

    function arrive() {
        info.textContent = `Arriving at ${stop.name}`
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();