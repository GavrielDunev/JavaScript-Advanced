function validate() {
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/gm;
    document.querySelector('#email').addEventListener('change', (e) => {
        let email = e.target.value;
        if (!emailRegex.test(email)) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    })
}