function attachEventsListeners() {
    document.querySelector('main').addEventListener('click', (event) => {
        let days = document.querySelector('#days');
        let hours = document.querySelector('#hours');
        let minutes = document.querySelector('#minutes');
        let seconds = document.querySelector('#seconds');

        if (event.target.id === 'daysBtn') {
            hours.value = 24 * days.value;
            minutes.value = 1440 * days.value;
            seconds.value = 86400 * days.value;
        } else if (event.target.id === 'hoursBtn') {
            days.value = hours.value / 24;
            minutes.value = hours.value * 60;
            seconds.value = hours.value * 3600;
        } else if (event.target.id === 'minutesBtn') {
            days.value = minutes.value / 1440;
            hours.value = minutes.value / 60;
            seconds.value = minutes.value * 60;
        } else if (event.target.id === 'secondsBtn') {
            days.value = seconds.value / 86400;
            hours.value = seconds.value / 3600;
            minutes.value = seconds.value / 6;
        }
    })
}