/**
 * This problem was asked by Amazon.

Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.
 */

function encode(string) {
    if(!string.length) {
        return "";
    }

    let last = string[0];
    let count = 1;
    let str = "";
    for(let i = 1; i < string.length; i++) {
        if(last == string[i]){
            count++;
        } else {
            str+=`${count}${last}`;
            count = 1;
        }

        last = string[i];
    }

    str+=`${count}${last}`;

    return str;
}

function buildStr(char, k) {
    let str = "";
    for(let i = 0; i < k; i++) {
        str+=char;
    }
    return str;
}

function decode(string) {
    let returnStr = "";
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        if(isNaN(string[i])) {
            returnStr+=buildStr(string[i], count);
            count = 0;
        } else {
            count = count*10 + parseInt(string[i]);
        }
    }

    return returnStr;
}

let str = "dfdfdfbsdf";
let encoded = encode(str);
let decoded = decode(encoded);
console.log(encoded, decoded, str == decoded);