function factorial(n) {
    let fact = 1;
    
    for(let i = 1; i <= n; i++) {
        fact = fact*i;
    } 
    
    return fact;
}


function fib(n) {
    if(n == 0) {
        return 0;
    }
    
    if(n == 1) {
        return 1;
    }
    
    return fib(n-1) + fib(n-2);
}

1, 2, 2, 2, 3, 4, 5, 6, 7, 1, 8

let cache = {};
let max = 10;
let cachedCount = 0;
let currentTime = 0;

function addToCache(key, value) {
    if(cache[key]) {
        cache[key] = {value: value, time: currentTime};
    } else {
        if(cachedCount > max) {
            let leastKey = "";
            let min = Number.MAX_INTEGER;
            Object.keys(cache).forEach(key => {
                if(cache[key].time < min) {
                    leastKey = key;
                    min = cache[key].time;
                }
            });
            delete cache[leastKey];
            cache[key] = {value: value, time: currentTime};
        } else {
            cache[key] = {value: value, time: currentTime};
            cachedCount++;
        }
    }
    currentTime++;
}


Input:   str1 = "eke",  str2 = "geek"
Output: "geeke"

Input:   str1 = "AGGTAB",  str2 = "GXTXAYB"
Output:  "AGXGTXAYB"


