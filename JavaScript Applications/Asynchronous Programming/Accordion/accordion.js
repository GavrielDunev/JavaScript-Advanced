window.addEventListener('load', solution);
async function solution() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const data = await response.json();

    data.forEach(d => {
        const newEl = document.querySelector('.accordion').cloneNode(true);
        document.querySelector('#main').appendChild(newEl);
        newEl.querySelector('span').textContent = d.title;
        newEl.querySelector('button').addEventListener('click', () => toggle(d._id, newEl));
    })

    document.querySelectorAll('.accordion')[0].remove();

}

async function toggle(id, element) {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/details/' + id);
    const info = await response.json();
    const extra = element.querySelector('.extra');
    element.querySelector('p').textContent = info.content;
    const button = element.querySelector('button');

    if (button.textContent == 'More') {
        extra.style.display = 'block';
        button.textContent = 'Less';
    } else {
        extra.style.display = 'none';
        button.textContent = 'More';
    }
}