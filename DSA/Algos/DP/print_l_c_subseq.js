function lcs(s1, s2) {
    if (s1.length === 0 || s2.length === 0) {
        return "";
    }

    if (s1[0] === s2[0]) {
        return s1[0] + lcs(s1.slice(1), s2.slice(1));
    } else {
        const one = lcs(s1.slice(0), s2.slice(1));
        const two = lcs(s1.slice(1), s2.slice(0));
        if(one.length > two.length) {
            return one;
        } else {
            return two;
        }
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

    // return dp;

    let i = 1;
    let j = 1;
    let str = "";
    while(i <= s1.length && j <= s2.length) {
        if(dp[i-1][j-1] + 1 ===  dp[i][j]) {
            str+=s1[i-1];
            i++;
            j++;
        } else if(dp[i-1][j] > dp[i][j-1]) {
            str+=s1[i-1]
            i+=1;
        }  else if(dp[i-1][j] < dp[i][j-1]) {
            str+=s2[j-1]
            j+=1;
        } else {
            i++;
            j++;
        }
    }

    return str;
}

console.log(lcsDp("abdec", "abcfg")); //goeog