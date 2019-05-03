function lcs(s1, s2) {
    if (s1.length === 0 || s2.length === 0) {
        return 0;
    }

    if (s1[0] === s2[0]) {
        return 1 + lcs(s1.slice(1), s2.slice(1));
    } else {
        return Math.max(lcs(s1.slice(0), s2.slice(1)), lcs(s1.slice(1), s2.slice(0)));
    }
}

function lcsDp(s1, s2) {
    let dp = new Array(s1.length + 1);
    for (let i = 0; i < s1.length + 1; i++) {
        dp[i] = new Array(s2.length + 1);
    }

    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            } else if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[s1.length][s2.length];
}

console.log(lcsDp("goleog", "goelog")); //5