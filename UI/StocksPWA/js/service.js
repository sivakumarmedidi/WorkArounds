const MY_TOKEN = "VQPa8iwbbBzOg83aC8RxN6SaDW2PHuHQQsfnaNkf4rdgvFCVSM4ZwSjYqzVc";
export const STOCK_ORIGIN = "https://www.worldtradingdata.com";
const STOCK_BASE_URL = "/api/v1/stock?symbol="

const SEARCH_BASE_URL = "/api/v1/stock_search?search_by=symbol,name&limit=10&search_term="

export default async function fetchStockData(stockSymbols=["AAPL","MSFT","CSCO"]) {
    const url = `${STOCK_ORIGIN}${STOCK_BASE_URL}${stockSymbols.join(",")}&api_token=${MY_TOKEN}`;
    const stream = await fetch(url)
    return await stream.json();
}

export async function serachStocks(string) {
    const url = `${STOCK_ORIGIN}${SEARCH_BASE_URL}${string}&api_token=${MY_TOKEN}`;
    const stream = await fetch(url)
    return await stream.json();
} 