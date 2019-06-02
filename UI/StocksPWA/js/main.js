//indexDB to store user prefs
//API to fetch stocks info
//add a name to fetch stock info

import StockInfo from "./stockInfo.js";
import fetchStockData, { serachStocks } from "./service.js";

customElements.define("stock-info", StockInfo);

async function registerSW() {
    if("serviceWorker" in navigator) {
        try {
            await navigator.serviceWorker.register("/sw.js");
        } catch(e) {
            console.log("SW registration failed");
        }
    }
}

class MainClass {
    constructor() {
        this.init();
        this.suggestionElem = document.querySelector(".stock-suggestions");
        this.stocksContainer = document.querySelector(".stocks-container");

        this.attachListeners();
    }

    async init() {
        this.userStocks = await this.getUserStocks();
        this.userStocks.forEach(stock => {
            this.appendStock(stock);
        });

        const {data} = await fetchStockData(this.userStocks.map(stock => stock.stockCode));
        data.forEach(stock => {
            this.updateStockValue(stock.symbol, stock);
        })
    }

    attachListeners() {
        addStock.addEventListener("input", this.onSearchInput.bind(this));
    }

    onSearchInput() {
        clearTimeout(this.inputHandler);
        this.clearSuggestions();
        this.inputHandler = setTimeout(() => this.showStockSuggestions(addStock.value), 500);
    }

    async showStockSuggestions(value) {
        if(value) {
            const {data} = await serachStocks(value);
            this.suggestionElem.classList.add("closed");
            if(data.length) {
                this.suggestionElem.classList.remove("closed");
            }
            data.forEach(entry => {
                const divElem = document.createElement("div");
                divElem.setAttribute("data-code", entry.symbol);
                divElem.innerText = `${entry.name} - ${entry.currency}`
                this.suggestionElem.append(divElem);
            });
        }
    }

    async getUserStocks() {
        return [{
            stockName: "Microsoft",
            stockCode: "MSFT"
        }, {
            stockName: "Cisco",
            stockCode: "CSCO"
        }];
    }

    clearSuggestions() {
        this.suggestionElem.innerHTML = "";
    }

    updateStockValue(code, info) {
        const elem = document.querySelector(`stock-info[data-key=${code}]`);
        if(elem) {
            elem.stockValue = `${info.price} ${info.currency}`;
            elem.isLoading = false;
        }
    }

    appendStock(stock) {
        const elem = document.createElement("stock-info");
        elem.setAttribute("data-key", stock.stockCode);
        elem.setAttribute("stockName", stock.stockName);
        elem.setAttribute("stockCode", stock.stockCode);
        elem.isLoading = true;
        this.stocksContainer.append(elem);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const main = new MainClass();
    registerSW();
});











// document.addEventListener("DOMContentLoaded", async () => {
//     const userStocks = await getUserStocks();
//     addStocksToDom(userStocks);
//     fetchStockData(userStocks.map(stock => stock.stockCode)).then(data => assignStockValues(data.data));
//     registerSW();
//     let inputHandler; 
//     addStock.addEventListener("input", (e) => {
//         clearTimeout(inputHandler);
//         clearSuggestions();
//         inputHandler = setTimeout(() => showStockSuggestions(addStock.value), 500);
//     });

//     document.addEventListener("click", e => {
//         if(e.target.dataSet.code) {
//             clearSuggestions();
            
//         }
//     });
// });

// function clearSuggestions() {
//     const suggestionElem = document.querySelector(".stock-suggestions");

// }

// async function showStockSuggestions(value) {
//     if(value) {
//         const {data} = await serachStocks(value);
//         const suggestionElem = document.querySelector(".stock-suggestions");
//         suggestionElem.classList.add("closed");
//         if(data.length) {
//             suggestionElem.classList.remove("closed");
//         }
//         data.forEach(entry => {
//             const divElem = document.createElement("div");
//             divElem.setAttribute("data-code", entry.symbol);
//             divElem.innerText = `${entry.name} - ${entry.currency}`
//             suggestionElem.append(divElem);
//         });
//     }
// }


// function assignStockValues(result) {
//     result.forEach(stockInfo => {
//         const elem = document.querySelector(`stock-info[data-key=${stockInfo.symbol}]`);
//         if(elem) {
//             elem.stockValue = `${stockInfo.price} ${stockInfo.currency}`;
//             elem.isLoading = false;
//         }
//     })
// }