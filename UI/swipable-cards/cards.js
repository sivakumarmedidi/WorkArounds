'use strict';

class Cards {
    constructor() {
        this.cards = document.querySelectorAll(".card");

        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
        this.update = this.update.bind(this);
        this.target = null;

        this.addEventListeners();
    }

    addEventListeners() {
        document.addEventListener("touchstart", this.onStart);
        document.addEventListener("touchmove", this.onMove);
        document.addEventListener("touchend", this.onEnd);
    }

    onStart(evt) {
        if(!evt.target.classList.contains("card"))
            return;

        this.target = evt.target;

        evt.preventDefault();
    }

    onMove() {

    }

    onEnd() {

    }

    update() {

    }
}


window.addEventListener('load', () => new Cards());