function addItem() {
    const ul = document.getElementById('items');
    const text = document.getElementById('newItemText').value;
    const newLi = document.createElement('li');
    newLi.textContent = text;
    ul.appendChild(newLi);
    document.getElementById('newItemText').value = '';
}