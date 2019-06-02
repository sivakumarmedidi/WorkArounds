class ScriptLoader {
    static loadedScripts = {};
    constructor(scriptPath) {
        this.scriptPath = scriptPath;
        this.scriptElem = document.createElement("script");
        this.head = document.querySelector("head");
    }

    load() {
        if(ScriptLoader.loadedScripts[this.scriptPath]) {
            throw "This script has already been loaded!"
        }
        return new Promise((resolve, reject) => {
            this.head.append(this.scriptElem);
            this.scriptElem.src = `/assets/${this.scriptPath}`;
            this.scriptElem.onload = e => {
                ScriptLoader.loadedScripts[this.scriptPath] = 1;
                resolve(e);
            };
            this.scriptElem.onerror = e => reject(e);
        });
    }
}

const button = document.querySelector("button");
button.onclick = e => {
    let fileNameInputElem = document.querySelector("input");
    let scriptLoad = new ScriptLoader(fileNameInputElem.value);
    scriptLoad.load().then(e => console.log(e)).catch(e => console.error(e));
}