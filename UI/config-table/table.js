'use strict';

class ConfigTable {
    constructor() {
        this.columns = [{
            label: "",
            render(rowConfig) {
                const input = document.createElement("input");
                input.type = "checkbox";
                input.className = "rowSelect";
                input.checked = rowConfig.selected;
                return input;
            }
        }, {
            label: "Key",
            render(rowConfig) {
                const span = document.createElement("span");
                span.innerHTML = rowConfig.label;
                return span;
            }
        }, {
            label: "Value",
            render(rowConfig) {
                return this.getCustomElement(rowConfig.field, rowConfig.selected);
            }
        }, {
            label: "Description",
            render(rowConfig) {
                const span = document.createElement("span");
                span.innerHTML = rowConfig.description;
                return span;
            }
        }];
        this.config = null;
        this.CONFIG_URL = "https://flipkart-configuration-table.now.sh/api";
        this.tableBody = document.querySelector("tbody");
        this.tableHead = document.querySelector("thead");
        this.footerBtn = document.querySelector(".footer button");
        this.selectedData = {};

        this.addEventListeners();
        this.init();
    }

    getCustomElement(field, isSelected) {
        switch(field.type) {
            case "text": {
                const input = document.createElement("input");
                input.type = "text";
                input.className = "rowInput";
                input.value = isSelected ? field.defaultValue : "";
                input.disabled = !isSelected;
                return input;
            }
            case "select": {
                const input = document.createElement("select");
                input.className = "rowInput";
                input.value = isSelected ? field.defaultValue : "";
                input.disabled = !isSelected;
                field.options.forEach(opt => {
                    const optElem = document.createElement("option");
                    optElem.value = opt;
                    optElem.innerHTML = opt;
                    input.append(optElem);
                });
                return input;
            }
            default : {
                return document.createElement("span");
            }
        }
    }

    addEventListeners() {
        document.addEventListener("input", this.onInput.bind(this));
        this.footerBtn.addEventListener("click", this.printSelectedData.bind(this));
    }

    printSelectedData() {
        console.log(this.selectedData);
    }

    onInput(evt) {
        console.log(evt);
        if(evt.target.id === "searchTable") {
            //search
        } else if (evt.target.id === "showSelected") {
            if(evt.target.checked) {
                for(const tr of this.tableBody.querySelectorAll("tr")) {
                    if(!(tr.dataset.key in this.selectedData)) {
                        tr.style.display = "none";
                    }
                }
            } else {
                for(const tr of this.tableBody.querySelectorAll("tr")) {
                    tr.style.display = "table-row";
                }
            }
        } else if (evt.target.classList.contains("rowSelect")) {
            const row = evt.target.closest("tr");
            const input = row.querySelector(".rowInput");
            input.disabled = !evt.target.checked;
        } else if (evt.target.classList.contains("rowInput")) {
            const row = evt.target.closest("tr");
            const key = row.dataset.key;
            this.selectedData[key] = evt.target.value;
        }
    }

    fetchConfiguration() {
        return fetch(this.CONFIG_URL).then(response => response.json());
    }

    drawTable() {
        const headTr = document.createElement("tr");
        this.columns.forEach(col => {
            const th = document.createElement("th");
            th.innerHTML = col.label;
            headTr.append(th);
        });
        this.tableHead.append(headTr);
        this.config.forEach(rowConfig => {
            if(rowConfig.selected) {
                this.selectedData[rowConfig.key] = rowConfig.field.defaultValue;
            }
            this.tableBody.append(this.getTr(rowConfig));
        });
    }

    getTr(rowConfig) {
        const tr = document.createElement("tr");
        this.columns.forEach(col => {
            const td = document.createElement("td");
            td.append(col.render.call(this, rowConfig));
            tr.append(td);
            tr.setAttribute("data-key", rowConfig.key);
        });
        return tr;
    }

    init() {
        this.fetchConfiguration().then(response => {
            this.config = response.config;
            this.drawTable();
        });
    }
    
}
console.log("asas");

document.addEventListener("DOMContentLoaded", () => new ConfigTable());