class ShootingGame extends HTMLElement {
    _bulletSpeed = 1000;
    _targetSpeed = 300;
    _arenaHeight = 500;
    _targetHeight = 100;
    _gunFromTop = 200;
    _bulletWidth = 5;
    _refreshInterval = 16;
    _count = 0;

    constructor() {
        super();
        this.root = this.attachShadow({mode: "open"});
    }

    toInt(str) {
        return Number(str.slice(0, str.length - 2));
    }

    set options(value) {
        const {
            bulletSpeed = this._bulletSpeed,
            targetSpeed = this._targetSpeed,
            targetHeight = this._targetHeight,
            arenaHeight = this._arenaHeight,
            gunFromTop = this._gunFromTop
        } = value;
        this._arenaHeight = arenaHeight;
        this._bulletSpeed = bulletSpeed;
        this._targetSpeed = targetSpeed;
        this._targetHeight = targetHeight;
        this._gunFromTop = gunFromTop;
        this.draw();
    }

    connectedCallback() {
        this.styles = document.createElement("style");
        this.styles.innerHTML = `
            .container {
                position: absolute;
                border: 1px solid black;
                width: 90%;
                height: ${this._arenaHeight}px;
            }
            .target {
                position: absolute;
                background: black;
                width: 10px;
                height: ${this._targetHeight}px;
                display: inline-block;
            }
            .gun {
                position: absolute;
                display: inline-block;
                width: 50px;
                height: 20px;
                background: black;
                float: right;
                right: 0px;
                top: ${this._gunFromTop}px;
            }
            .bullet {
                position: absolute;
                display: inline-block;
                width: ${this._bulletWidth}px;
                height: 5px;
                background: #d01b1b;
                z-index: 1;
            }
        `;

        this.containerDiv = document.createElement("div");
        this.containerDiv.classList.add("container");

        this.scoreCard = document.createElement("div");
        this.scoreCard.innerHTML = this._count;

        this.root.append(this.styles);
        this.root.append(this.scoreCard);
        this.root.append(this.containerDiv);
        this.draw()
    }

    disconnectedCallback() {
        console.log("disconnected");
    }

    moveTarget(targetDiv) {
        const tSpeed = this._targetSpeed;
        const changeInTop = tSpeed*this._refreshInterval/1000;
        let max = this.containerDiv.clientHeight - targetDiv.offsetHeight;
        let min = 0;
        let direction = 1;
        const moveFn = () => {
            let top = this.toInt(targetDiv.style.top) + (direction * changeInTop);
            if(top > max) {
                direction = -1;
                top = max;
            }

            if(top < min) {
                direction = 1;
                top = min;
            }

            targetDiv.style.top = top + "px";
            return requestAnimationFrame(moveFn);
        }

        moveFn();
    }

    collided(targetDiv) {
        let top = this.toInt(targetDiv.style.top);
        let bulletTop = this._gunFromTop + this.gun.offsetHeight/2;
        return (bulletTop > top && bulletTop < (top + this._targetHeight));
    }

    shootBullet(bullet, targetDiv) {
        const bSpeed = this._bulletSpeed;
        const changeInTop = bSpeed*this._refreshInterval/1000;
        let direction = -1;
        let interval;
        const moveFn = () => {
            let left = this.toInt(bullet.style.left) + (direction * changeInTop);
            bullet.style.left = left + "px";
            if(left < 0) {
                bullet.remove();
                let collided = this.collided(targetDiv);
                if(collided) { 
                    this._count++;
                };
                this.scoreCard.innerHTML = this._count;
                console.log(this._count, interval);
                cancelAnimationFrame(interval);
                return;
            }

            interval = requestAnimationFrame(moveFn);
        }

        interval = requestAnimationFrame(moveFn);
    }

    draw() {
        this.styles.innerHTML = `
            .container {
                position: absolute;
                border: 1px solid black;
                width: 90%;
                height: ${this._arenaHeight}px;
            }
            .target {
                position: absolute;
                background: black;
                width: 10px;
                height: ${this._targetHeight}px;
                display: inline-block;
            }
            .gun {
                position: absolute;
                display: inline-block;
                width: 50px;
                height: 20px;
                background: black;
                float: right;
                right: 0px;
                top: ${this._gunFromTop}px;
            }
            .bullet {
                position: absolute;
                display: inline-block;
                width: ${this._bulletWidth}px;
                height: 5px;
                background: #d01b1b;
                z-index: 1;
            }
        `;

        this.containerDiv.innerHTML = "";
        const targetDiv = document.createElement("div");
        targetDiv.classList.add("target");

        this.gun = document.createElement("div");
        this.gun.classList.add("gun");

        this.containerDiv.append(targetDiv);
        this.containerDiv.append(this.gun);

        this.gun.onclick = (e) => {
            const bullet = document.createElement("div");
            bullet.classList.add("bullet");
            this.containerDiv.append(bullet);
            bullet.style.top = (this._gunFromTop + this.gun.offsetHeight/2 - bullet.offsetHeight/2) + "px";
            bullet.style.left = (this.containerDiv.clientWidth - this.gun.offsetWidth) + "px";
            this.shootBullet(bullet, targetDiv);
        };
        this.moveTarget(targetDiv);
    }
};

customElements.define("shooting-game", ShootingGame);