function attachGradientEvents() {
    let result = document.querySelector('#result');
    document.querySelector('#gradient').addEventListener('mousemove', onMove);

    function onMove(event) {
        let offset = event.offsetX;
        let percentage = Math.floor(offset / event.target.clientWidth * 100);
        result.textContent = percentage + '%';
    }
}