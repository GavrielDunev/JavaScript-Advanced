function cards(arr) {
    const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cardSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };
    let result = '';
    for (let card of arr) {
        let currentFace = '';
        let currentSuit = '';
        if (card.length == 3) {
            currentFace = card[0] + card[1];
            currentSuit = card[2];
        } else {
            [currentFace, currentSuit] = card;
        }
        if (!cardFaces.includes(currentFace) || !Object.keys(cardSuits).includes(currentSuit)) {
            console.log(`Invalid card: ${currentFace}${currentSuit}`);
            return;
        }
        result += currentFace + cardSuits[currentSuit] + ' ';

    }
   
    console.log(result.trim());
}
cards(['5S', '3D', 'QD', '1C']);