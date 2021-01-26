function focus() {
    let sections = Array.from(document.querySelectorAll('body div div input'));
    sections.forEach(s => s.addEventListener('focus', onFocus));
    sections.forEach(s => s.addEventListener('blur', onBlurr));

    function onFocus(event) {
        event.target.parentNode.classList.add('focused');
    }

    function onBlurr(event) {
        event.target.parentNode.classList.remove('focused');
    }
}