function toggle() {
    let buttonText = document.querySelector('.button');
    let extraText = document.getElementById('extra');
    if (buttonText.textContent === 'More') {
        buttonText.textContent = 'Less';
        extraText.style.display = 'block';
    } else {
        buttonText.textContent = 'More';
        extraText.style.display = 'none';
    }

}