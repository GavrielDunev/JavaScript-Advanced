function lockedProfile() {
    document.querySelector('main').addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            if (!event.target.parentNode.querySelector('input[value=lock]:checked')) {
                let display = event.target.parentNode.querySelector('div').style.display;
                event.target.parentNode.querySelector('div').style.display = display == 'block' ? 'none' : 'block';
                let currentText = event.target.textContent;
                event.target.textContent = currentText === 'Show more' ? 'Hide it' : 'Show more';
            }
        }
    })
}