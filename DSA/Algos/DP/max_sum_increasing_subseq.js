function msis(arr) {
    const arrLen = arr.length;
    const dp = new Array(arrLen);

    dp[0] = arr[0];
    let i = 1;
    let max = Number.MIN_SAFE_INTEGER;
    while(i < arrLen) {
        dp[i] = arr[i];
        let j = 0;
        while(j < i) {
            if(arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + arr[i]);
                if(max < dp[i]) {
                    max = dp[i];
                }
            }
            j++;
        }
        i++;
    }

    console.log(dp);
    return max;
}

console.log(msis([1, 101, 2, 3, 100, 4, 5]));