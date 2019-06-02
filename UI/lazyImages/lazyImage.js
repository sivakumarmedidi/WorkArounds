export default class LazyImage extends HTMLElement {
    constructor() {
        super()
        this.loaded = false;
        this._visible = false;
        this.src = this.getAttribute("src");
        this.innerHTML = `<div style="margin: 0 auto;">Loading...</div>`
        this.imageElem = document.createElement("img");
        this.imageElem.onload = () => {
            this.loaded = true;
            for(const child of this.childNodes) {
                child.remove()
            }

            // this.appendChild(this.imageElem);
        }
    }

    set visible(visible) {
        if(!this.src || this.loaded || !visible)
            return;

        this.imageElem.src = this.src;
    }

    connectedCallback() {
        this.style.width = `${this.getAttribute("width")}px`;
        this.style.height =`${this.getAttribute("height")}px`;
        this.imageElem.style.width = `${this.getAttribute("width")}px`;
        // this.imageElem.style.height =`${this.getAttribute("height")}px`;
        this.style.display = "block";
        this.style.border = "1px solid #eee"
    }

    static get observedAttributes() {
        return ["src", "width", "height"]
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch(name) {
            case "src": {
                if(oldValue === newValue)
                    return;

                this.src = newValue;
                this.loaded = false;
            }
            case "width": {
                this.style.width = this.imageElem.style.width = `${newValue}px`;
                break;
            }
            case "height": {
                this.style.height = this.imageElem.style.height = `${newValue}px`;
                break;
            }
        }
    }
}