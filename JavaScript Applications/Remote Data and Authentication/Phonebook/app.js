function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadContacts);
    document.getElementById('btnCreate').addEventListener('click', createContact);
}

async function createContact() {
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');
    const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "person": person.value,
            "phone": phone.value
        })
    });

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    } else {
        loadContacts();
        person.value = '';
        phone.value = '';
    }
    
}

async function loadContacts() {
    const phoneBook = document.getElementById('phonebook');
    phoneBook.innerHTML = '';

    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await response.json();
    Object.values(data).map(createLiElement).forEach(c => phoneBook.appendChild(c));

    function createLiElement(contact) {
        const li = document.createElement('li');
        li.textContent = `${contact.person}: ${contact.phone}`;

        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.addEventListener('click', deleteContact);
        li.appendChild(button);

        async function deleteContact(event) {
            const getResponse = await fetch('http://localhost:3030/jsonstore/phonebook');
            const getDataResponse = await getResponse.json();
            const name = event.target.parentNode.textContent.split(':')[0];
            const id = Object.values(getDataResponse).find(c => c.person == name)._id;

            event.target.parentNode.remove();
            fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
                method: 'delete'
            });
        }

        return li;
    }
}

attachEvents();