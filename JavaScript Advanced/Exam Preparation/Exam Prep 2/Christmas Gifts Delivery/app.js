function solution() {
    document.querySelector('button').addEventListener('click', addGift);
    let [gifts, sent, discarded] = document.querySelectorAll('section ul');
    function addGift() {
        let name = document.querySelector('input').value;
        document.querySelector('input').value = '';
        
        let li = createEl('li', name, 'gift');

        let sendButton = createEl('button', 'Send')
        sendButton.setAttribute('id', 'sendButton');
        sendButton.addEventListener('click', () => moveGift(name, sent, li))

        let discardButton = createEl('button', 'Discard');
        discardButton.setAttribute('id', 'discardButton');
        discardButton.addEventListener('click', () => moveGift(name, discarded, li));

        li.appendChild(sendButton);
        li.appendChild(discardButton);

        gifts.appendChild(li);
        sortElements();
    }

    function moveGift(name, place, li) {
        li.remove();
        let toBeAdded = createEl('li', name, 'gift');
        place.appendChild(toBeAdded);
    }

    function createEl(type, text, cName) {
        let element = document.createElement(type);
        element.textContent = text;
        if (cName) {
            element.className = cName;
        }
        return element;
    }

    function sortElements() {
        let lis = Array.from(gifts.querySelectorAll('li'));
        lis.sort((first, second) => first.childNodes[0].textContent.localeCompare(second.childNodes[0].textContent)).forEach(li => gifts.appendChild(li));
    }
}