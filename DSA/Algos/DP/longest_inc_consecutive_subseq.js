function lics(arr) {
    const arrLen = arr.length;
    if(arrLen === 1) {
        return 1;
    }

    const dp = new Array(arrLen);
    for(let i = 0; i < arrLen; i++) {
        dp[i] = 1;
    }
    const hash = {};
    let max = 0;
    hash[arr[0]] = 0;
    let i = 1;
    while(i < arrLen) {
        if(hash[arr[i] - 1] != undefined) {
            dp[i] = dp[hash[arr[i] - 1]] + 1;
            if(max < dp[i]) {
                max = dp[i];
            }
            hash[arr[i]] = i;
        }
        i++;
    }

    console.log(dp);
    return max;
}

console.log(lics([3, 10, 3, 11, 4, 5, 6, 7, 8, 12]));