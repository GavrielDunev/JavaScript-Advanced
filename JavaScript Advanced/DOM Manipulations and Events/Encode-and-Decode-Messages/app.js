function encodeAndDecodeMessages() {
    let receiver = document.getElementsByTagName('textarea')[1];
    document.querySelector('#main').addEventListener('click', (event) => {
        if (event.target.textContent === 'Encode and send it') {
            let text = event.target.parentNode.querySelector('textarea');
            let encoded = '';
            for (let cur of Array.from(text.value)) {
                encoded += String.fromCharCode(cur.charCodeAt(0) + 1);
            }
            text.value = '';
            receiver.value = encoded;
        } else if (event.target.textContent === 'Decode and read it') {
            let decoded = '';
            for (let cur of Array.from(receiver.value)) {
                decoded += String.fromCharCode(cur.charCodeAt(0) - 1);
            }
            receiver.value = decoded;
        }
    })
}