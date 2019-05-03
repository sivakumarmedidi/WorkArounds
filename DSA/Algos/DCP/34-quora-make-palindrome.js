/**
 *
 *
This problem was asked by Quora.

Given a string, find the palindrome that can be made by inserting the fewest number of characters as possible anywhere in the word. If there is more than one palindrome of minimum length that can be made, return the lexicographically earliest one (the first one alphabetically).

For example, given the string "race", you should return "ecarace", since we can add three letters to it (which is the smallest amount to make a palindrome). There are seven other palindromes that can be made from "race" by adding three letters, but "ecarace" comes first alphabetically.

As another example, given the string "google", you should return "elgoogle".
*/

function isPalindrome(str) {
    let start = 0;
    let end = str.length -1;
    while(start <= end) {
        if(str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

function makePalindrome(str) {
    if(isPalindrome(str)) {
        return str;
    }

    if(str[0] === str[str.length -1]) {
        return str[0] + makePalindrome(str.slice(1,-1)) + str[0];
    } else {
        let b = str[str.length - 1] + makePalindrome(str.slice(0,-1)) + str[str.length - 1];
        let a = str[0] + makePalindrome(str.slice(1)) + str[0];
        if(a.length > b.length) {
            return b;
        } else if (a.length < b.length) {
            return a;
        } else {
            return a > b ? b : a;
        }
    }
}

console.log(makePalindrome("google"));

function mpDp(str) {
    let dp = new Array(str.length + 1);
    for(let i = 0; i <= str.length; i++) {
        dp[i] = new Array(str.length+1);
    }

    for(let i = 0; i <= str.length; i++) {
        for(let j = 0; j <= str.length; j++) {
            dp[i][j] = "";
            if(j == 1 && i < str.length) {
                dp[i][1] = str[i];
            }
        }
    }
}