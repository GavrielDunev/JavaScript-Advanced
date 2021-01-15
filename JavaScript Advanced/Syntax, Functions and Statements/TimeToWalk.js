function caclTime(steps, footprintInM, speedInKmH) {
    let speedInMS = speedInKmH * 5 / 18;
    let distanceInM = steps * footprintInM;
    let rests = Math.floor(distanceInM / 500) * 60;
    let timeInSec = distanceInM / speedInMS + rests;

    let hours = Math.floor(timeInSec / 3600) + '';
    let minutes = Math.floor((timeInSec - hours * 3600) / 60) + '';
    let seconds = Math.round(timeInSec % 60) + '';
    
    console.log(`${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${(seconds + '').padStart(2, '0')}`);
}

caclTime(4000, 0.60, 5);
caclTime(2564, 0.70, 5.5);