document.querySelector('form').addEventListener('submit', createSubmit);

async function createSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get('name');
    const img = formData.get('img');
    const ingredients = formData.get('ingredients')
        .split('\n')
        .map(i => i.trim())
        .filter(i => i != '');
    const steps = formData.get('steps')
        .split('\n')
        .map(i => i.trim())
        .filter(i => i != '');

    const token = sessionStorage.getItem('accessToken');

    const response = await fetch('http://localhost:3030/data/recipes', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ name, img, ingredients, steps })
    })

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    window.location.pathname = 'index.html';
}