class stack {
    constructor() {
        this.maxes = [];
        this.stack = [];
    }

    push(val) {
        if(!this.maxes.length || this.maxes[this.maxes.length - 1] <= val) {
            this.maxes.push(val);
        }
        this.stack.push(val);
    }

    pop() {
        if(this.stack.length) {
            if(this.maxes[this.maxes.length - 1] == this.stack[this.stack.length - 1]) {
                this.maxes.pop();
            }
            return this.stack.pop();
        } else {
            return null;
        }
    }

    max() {
        return this.maxes.length ? this.maxes[this.maxes.length - 1] : null
    }
}