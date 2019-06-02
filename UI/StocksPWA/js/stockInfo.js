class StockInfo extends HTMLElement {

    get stockName() {
        return this.getAttribute("stockName");
    }

    get stockCode() {
        return this.getAttribute("stockCode");
    }

    get stockValue() {
        return this.getAttribute("stockValue");
    }

    set stockValue(value) {
        const stockValueSpan = this.querySelector(".stock-value");
        stockValueSpan.style.display = "inline";
        stockValueSpan.innerText = value || this.stockValue;
    }

    connectedCallback() {
        this._loading = true;
        this.innerHTML = `
            <div class="stock-info">
                <span>${this.stockName}</span>
                <span>${this.stockCode}</span>
                <span class="laoding">Loading...</span>
                <span class="stock-value">${this.stockValue}</span>
            </div>
        `;
    }

    set isLoading(value) {
        const loadingSpan = this.querySelector(".laoding");

        if(!loadingSpan)
            return;

        loadingSpan.style.display = "none";
        this._loading = value;
    }

    get isLoading() {
        return this._loading;
    }
}

export default StockInfo;