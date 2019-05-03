/**
 * No of players
 * Chance of every player, rolling dice - click on dice to generate random number between 1 and 6
 * Hash map containing current configuration of each player
 * Hash map containing the configuration of snakes and ladders
 * ex: {1: 11 <-ladder, 54 : 22 <- snake }
 *
 * 
 */

function random(min, max) {
    return min + Math.floor(Math.random()*(max - min + 1));
}

class SL {
    static get GRID_SIZE() {
        return 10;
    };

    static get maxIndex() {
        return SL.GRID_SIZE*SL.GRID_SIZE - 1;
    }
    static get SLConfig(){
        return {
            //ladders
            0: 37,
            3: 13,
            7: 29,
            20: 41,
            27: 76,
            49: 66,
            79: 98,
            70: 91,

            //snakes
            61: 17,
            35: 5,
            31: 9,
            47: 25,
            87: 23,
            94: 55,
            96: 77
        }
    }

    constructor(playerNames) {
        this.playersConfig = {};
        playerNames.forEach(player => {
            if(this.playersConfig[player]) {
                throw "Duplicate player names are not allowed";
            }

            this.playersConfig[player] = -1;
        });
        this._won = 0;
        this.winners = {};
    }

    static _getDiceValue() {
        return random(1, 6);
    }

    rollDice(player) {
        const diceValue = SL._getDiceValue();
        const nextValue = this.playersConfig[player] + diceValue;
        const nextValueFromSLConfig = this._getNextPlace(nextValue);
        this.playersConfig[player] = nextValueFromSLConfig;
        if(nextValueFromSLConfig >= SL.maxIndex) {
            console.log(`Rolled by ${player}. Player has won`);
            this.winners[++this._won] = player;
            delete this.playersConfig[player];
        } else {
            console.log(`Rolled by ${player}. 
            Dice value - ${diceValue}. 
            Moved to position - ${nextValueFromSLConfig+1}
            ${nextValue > nextValueFromSLConfig ? " because of snake bite" : nextValue < nextValueFromSLConfig ? " because of ladder climb" : ""}`);
        }
    }

    _getNextPlace(index) {
        if(SL.SLConfig[index]) {
            return SL.SLConfig[index];
        } else {
            return index;
        }
    }

    start() {
        while(Object.keys(this.playersConfig).length) {
            Object.keys(this.playersConfig).forEach(player => {
                this.rollDice(player);
            })
        }
    }
}

let slGame = new SL(["Siva", "Lakshmi"]);

slGame.start();
console.log(slGame.winners);