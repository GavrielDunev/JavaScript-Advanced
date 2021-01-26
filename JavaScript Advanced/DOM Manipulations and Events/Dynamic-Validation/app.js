function validate() {
    let input = document.querySelector('input[id="email"]');
    input.addEventListener('change', onChange);
    const regex = /^[a-z]+@[a-z]+\.[a-z]+$/gm;
    function onChange(ev) {
        let email = input.value;
        if (regex.test(email)) {
            ev.target.classList.remove('error');
        } else {
            ev.target.classList.add('error');
        }
    }
}