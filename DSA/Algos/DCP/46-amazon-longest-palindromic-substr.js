function lpsStr(string) {
    if(!string) {
        return {
            isPalindrom: true,
            string: ""
        }
    }

    if(string[0] == string[string.length - 1]) {
        let res = lpsStr(string.slice(1,string.length - 1));
        if(res.isPalindrom) {
            return {
                isPalindrom: true,
                string: string[0] + res.string + string[0]
            }
        } else {
            return {
                isPalindrom: false,
                string: ""
            }
        }
    } else {
        let res1 = lpsStr(string.slice(1));
        let res2 = lpsStr(string.slice(0, string.length - 1));
        if(res1.isPalindrom && res2.isPalindrom) {
            if(res1.string.length > res2.string.length) {
                return res1;
            } else {
                return res2;
            }
        } else if (res1.isPalindrom) {
            return res1;
        } else if (res2.isPalindrom) {
            return res2;
        } else {
            return {
                isPalindrom: false,
                string: ""
            }
        }
    }
}

console.log(lpsStr("aabcdcb"));