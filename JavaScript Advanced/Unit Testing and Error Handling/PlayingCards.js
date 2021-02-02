function cards(face, suit) {
    const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cardSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };
    
    if (!cardFaces.includes(face) || !Object.keys(cardSuits).includes(suit)) {
        throw new Error('Error');
    }
    function toString() {
        return `${face}${cardSuits[suit]}`
    }
   
    return toString();
}

console.log(cards('1', 'C'));