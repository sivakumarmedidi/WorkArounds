class CGL {
    constructor(coords, runs) {
        this.config = {};
        this.coords = coords;
        this.runs = runs;
        coords.forEach(coord => {
            if(this.config[coord.i]) {
                this.config[coord.i][coord.j] = {
                    currentState: "*"
                }
            } else {
                this.config[coord.i] = {
                    [coord.j]: {
                        currentState: "*"
                    }
                }
            }
        });
    }

    getAllNeighbourStates({i, j}) {
        const neighbours = [
            {i: i, j: j+1},
            {i: i, j: j-1},
            {i: i+1, j: j+1},
            {i: i+1, j: j-1},
            {i: i+1, j: j},
            {i: i-1, j: j+1},
            {i: i-1, j: j-1},
            {i: i-1, j: j}
        ]

        const states = [];
        neighbours.forEach(({i, j}) => {
            if(this.config[i] && this.config[i][j]) {
                states.push(this.config[i][j].currentState);
            }
        });
        
        return states;
    }

    tick() {
        this.coords.forEach(coord => {
            const neighbourStates = this.getAllNeighbourStates(coord);
            const neighboursAlive = neighbourStates.reduce((agg, next) => {
                if(next === "*") {
                    agg++;
                }
                
                return agg;
            }, 0);

            this.config[coord.i][coord.j].nextState = this.getNextState(
                this.config[coord.i][coord.j].currentState, neighboursAlive);
            
            console.log(`{${coord.i}, ${coord.j}} - ${this.config[coord.i][coord.j].nextState}`)
        });
    }

    assignCurrent() {
        this.coords.forEach(coord => {
            this.config[coord.i][coord.j].currentState = this.config[coord.i][coord.j].nextState;
        });
    }

    getNextState(currentState, live) {
        if(currentState == "*") {
            if (live == 2 || live == 3) {
                return "*";
            } else {
                return ".";
            }
        } else {
            if(live == 3) {
                return "*";
            } else {
                return ".";
            }
        }
    }

    start() {
        let runs = 0;
        while(runs < this.runs) {
            console.log("----");
            this.tick();
            this.assignCurrent();
            runs++;
        }
    }
}

let config = [{i:1,j:2}, {i:1, j:3}, {i:1,j:1}, {i:0,j:2}, {i:0,j:1}];
let cglInst = new CGL(config, 10);
cglInst.start();