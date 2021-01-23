function editElement(el, match, replacer) {
    let text = el.textContent;
    const regex = new RegExp(match, 'g')
    const newContent = text.replace(regex, replacer);
    el.textContent = newContent;
}