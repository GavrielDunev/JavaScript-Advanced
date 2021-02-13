function balloons() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonWeight) {
            super(color, gasWeight);
            this._ribbon = {
                color: ribbonColor,
                length: ribbonWeight
            }
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon{
        constructor(color, gasWeight, ribbonColor, ribbonWeight, text) {
            super(color, gasWeight, ribbonColor, ribbonWeight);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }

    return {
        Balloon, 
        PartyBalloon, 
        BirthdayBalloon
    }
}