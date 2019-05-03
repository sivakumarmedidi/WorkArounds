/*
This problem was asked by Pivotal.

A step word is formed by taking a given word, adding a letter, and anagramming the result. For example, starting with the word "APPLE", you can add an "A" and anagram to get "APPEAL".

Given a dictionary of words and an input word, create a function that returns all valid step words.
*/

function toHash(word) {
    let hash = {};
    for(let i = 0; i < word.length; i++) {
        hash[word[i]] = hash[word[i]] ? hash[word[i]]+1 : 1;
    }
    return hash;
}

function isStep(word, stepWord) {
    if(word.length + 1 === stepWord.length) {
        let hash = toHash(stepWord);
        let res = true;
        for(let i = 0; i < word.length; i++) {
            if(!hash[word[i]]) {
                res = false;
                break;
            } else {
                let value = hash[word[i]] - 1;
                hash[word[i]] = value;
                if(value == 0) {
                    delete hash[word[i]];
                }
            }
        }

        if(!res) {
            return false;
        } else {
            return Object.keys(hash).length === 1;
        }
    } else {
        return false;
    }
}

function allSteps(string, dict) {
    const result = [];
    Object.keys(dict).forEach(word => {
        if(isStep(string, word)) {
            result.push(word);
        }
    });
    return result;
}

console.log(allSteps("APPLE", {"APPEAL": 1, "LAPPEL": 1, "LAMPED": 1}));