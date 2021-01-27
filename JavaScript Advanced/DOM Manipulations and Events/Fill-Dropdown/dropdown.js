function addItem() {
    const menu = document.getElementById('menu');
    let name = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    const option = document.createElement('option');
    option.textContent = name.value;
    option.value = value.value;
    menu.appendChild(option);
    name.value = '';
    value.value = '';
}