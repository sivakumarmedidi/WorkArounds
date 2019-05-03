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

const App = {
    sl: null,
    playersList: [],
    currentPlayerIndex: -1,
    setCurrentPlayer() {
        App.currentPlayerIndex = (App.currentPlayerIndex + 1) % (App.playersList.length);
        chanceOf.innerHTML = App.playersList[App.currentPlayerIndex];
    },
    addPlayer() {
        const elem = document.getElementById("playerNameInput");
        if(elem.value) {
            App.playersList.push(elem.value);
            const playersListElem = document.getElementById("playersList");
            playersListElem.insertAdjacentHTML("beforeend", `<li>${elem.value}</li>`)
            elem.value = "";
        }
    },
    start() {
        playerInput.style.display = "none";
        startBtn.style.display = "none";
        chanceContainer.style.display = "block";
        App.sl = new SL(App.playersList);
        App.setCurrentPlayer();
        App.buildBoard();
    },
    buildBoard() {
        const gameBoard = document.getElementById("game");
        for(let i = 0; i < SL.GRID_SIZE; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            for(let j = 0; j < SL.GRID_SIZE; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.id=`cell${i*10 + j}`
                cell.innerHTML = `
                    <span class="cellIndex">${i*10 + j + 1}</span>
                    ${SL.SLConfig[i*10 + j] ? 
                        SL.SLConfig[i*10 + j] > i*10 + j ? 
                        `<span class="ladder">L - ${SL.SLConfig[i*10 + j]+1}</span>` : 
                        `<span class="snake">S - ${SL.SLConfig[i*10 + j]+1}</span>` :
                        ""
                    }
                    <ul class="players"></ul>
                `;
                row.insertAdjacentElement("afterbegin", cell);
            }
            gameBoard.insertAdjacentElement("afterbegin", row);
        }
    },
    removePlayerFromCell(player, cellId) {
        if(cellId >= 0) {            
            const cell = document.getElementById(`cell${cellId}`);
            const ul = cell.querySelector(".players");
            for(li of ul.childNodes) {
                if(li.innerText = player) {
                    li.remove();
                }
            }
        }
    },
    addPlayerToCell(player, cellId) {
        if(cellId <= 99) {
            const cell = document.getElementById(`cell${cellId}`);
            const ul = cell.querySelector(".players");
            const li = document.createElement("li");
            li.innerText = player;
            ul.append(li);
        }
    },
    rollDice() {
        const currentPlayer = App.playersList[App.currentPlayerIndex];
        App.removePlayerFromCell(currentPlayer, App.sl.playersConfig[currentPlayer]);
        App.sl.rollDice(currentPlayer);
        App.addPlayerToCell(currentPlayer, App.sl.playersConfig[currentPlayer]);
        App.setCurrentPlayer();
    }
};

