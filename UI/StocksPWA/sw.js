const STOCK_ORIGIN = "https://www.worldtradingdata.com";
const cacheName = "STOCK_CACHE";
const staticAssets = [
    "../index.html",
    "../styles.css",
    "../manifest.json",
    "../js/main.js",
    "../js/stockInfo.js",
    "../js/service.js"
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(staticAssets);
        })
    );
});

self.addEventListener("activate", () => {
    self.clients.claim();
});

self.addEventListener("fetch", e => {
    const req = e.request;
    const url = new URL(req.url);
    const stocksUrl = new URL(STOCK_ORIGIN);

    if(url.origin === location.origin) {
        e.respondWith(cacheFirst(req));
    } else if(url.origin === stocksUrl.origin) {
        e.respondWith(networkAndCache(req));
    }
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}

async function networkAndCache(req) {
    const cache = await caches.open(cacheName);
    try {
        fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    } catch(e) {
        const cached = await cache.match(req);
        return cached;
    }
}