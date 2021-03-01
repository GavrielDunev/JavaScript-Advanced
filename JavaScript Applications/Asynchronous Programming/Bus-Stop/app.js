async function getInfo() {
    const input = document.getElementById('stopId');
    const id = input.value;
    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + id;
    const ul = document.querySelector('#buses');
    const stopName = document.getElementById('stopName');
    ul.innerHTML = '';
    try {
        const response = await fetch(url);
        const data = await response.json();
        stopName.textContent = data.name;

        Object.entries(data.buses).forEach(([id, time]) => {
            const li = document.createElement('li');
            li.textContent = `Bus ${id} arrives in ${time}`;
            ul.appendChild(li);
        })
        input.value = '';
    } catch (error) {
        stopName.textContent = 'Error';
    }
}