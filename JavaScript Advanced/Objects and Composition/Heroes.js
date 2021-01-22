function solve() {
    return {
        mage,
        fighter
    }


    function fighter(name) {
        return {
            name,
            health: 100,
            stamina: 100,
            fight
        }
        function fight() {
            this.stamina--;
            console.log(`${name} slashes at the foe!`);
        }

    }

    function mage(name) {
        return {
            name,
            health: 100,
            mana: 100,
            cast
        }
        function cast(spell) {
            this.mana--;
            console.log(`${name} cast ${spell}`);
        }
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);