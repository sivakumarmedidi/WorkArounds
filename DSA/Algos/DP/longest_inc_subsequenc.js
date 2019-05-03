function lis(arr) {
    const arrLen = arr.length;
    if(arrLen === 1) {
        return 1;
    }

    const dp = new Array(arrLen);
    for(let i = 0; i < arrLen; i++) {
        dp[i] = 1;
    }
    let max = 0;
    let i = 1;
    while(i < arrLen) {
        let j = 0;
        while(j < i) {
            if(arr[i] >= arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
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

console.log(lis([3,4,-1,0,6,2,3,1]));