/*
This problem was asked by Microsoft.

Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].
*/

function findSentence(s, dictionary) {
    let starts = {0: ''};
    for(let i = 0; i < s.length; i++) {
        let temp = JSON.parse(JSON.stringify(starts));
        Object.assign(temp, starts);
        console.log("--", Object.keys(starts));
        Object.keys(starts).forEach(startIndex => {
            let word = s.slice(parseInt(startIndex), i+1);
            console.log(startIndex, word, i);
            if(dictionary[word]) {
                temp[i+1] = word;
            }
        })
        starts = JSON.parse(JSON.stringify(temp));
    }
    console.log(starts);

// result = []
// current_length = len(s)
// if current_length not in starts:
//     return None
// while current_length > 0:
//     word = starts[current_length]
//     current_length -= len(word)
//     result.append(word)

// return list(reversed(result))
}

console.log(findSentence("bedbathandbeyond", {"bed": 1, "bath": 1, "bedbath": 1, "beyond": 1, "and": 1}));