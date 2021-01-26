function addItem() {
    let text = document.getElementById('newText');
    let newLi = document.createElement('li');
    newLi.textContent = text.value;
    
    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';
    deleteButton.addEventListener('click', (ev) => {
        ev.target.parentNode.remove();
    });
    newLi.appendChild(deleteButton);
    document.getElementById('items').appendChild(newLi);
    text.value = '';

}