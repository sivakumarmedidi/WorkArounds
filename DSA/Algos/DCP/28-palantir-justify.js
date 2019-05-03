/**
 * This problem was asked by Palantir.

Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.

More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.

If you can only fit one word on a line, then you should pad the right-hand side with spaces.

Each word is guaranteed not to be longer than k.

For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:

["the  quick brown", # 1 extra space on the left
"fox  jumps  over", # 2 extra spaces distributed evenly
"the   lazy   dog"] # 4 extra spaces distributed evenly
*/

function spacesStr(num) {
    let str = "";
    for(let i = 0; i < num; i++) {
        str+=" ";
    }
    return str;
}

function getLineString(inputArray, start, end, spaces) {
    let totalWords = end - start + 1;
    let minReqSpaces = parseInt(spaces/(totalWords-1));
    let extraSpaces = spaces % (totalWords - 1);
    i = start, extraSpace = 0, str = "";
    while(i <= end) {
        if(i == end) {
            str+=inputArray[i];
        } else {
            str+=(inputArray[i] + spacesStr(minReqSpaces+(extraSpace < extraSpaces ? 1 : 0)));
        }
        extraSpace++;
        i++;
    }

    return str;
}

function getLine(inputArr, k, startIndex) {
    let wordCount = 1;
    let totalLength = 0;
    let currentIndex = startIndex;
    while(currentIndex < inputArr.length) {
        totalLength+=inputArr[currentIndex].length;
        let compare = totalLength + wordCount - 1;
        if(compare < k) {
            currentIndex++;
            wordCount++;
        } else if (compare === k) {
            currentIndex++;
            wordCount++;
            break;
        } else {
            totalLength-=inputArr[currentIndex].length;
            break;
        }
    }
    
    return {
        nextIndex: currentIndex,
        string: getLineString(inputArr, startIndex, currentIndex-1, k - totalLength)
    }
}


function justify(inputArr, k) {
    let result = [];
    let nextIndex = 0;
    while(nextIndex < inputArr.length) {
        let obj = getLine(inputArr, k, nextIndex);
        nextIndex = obj.nextIndex;
        result.push(obj.string);
    }

    return result;
}

console.log(justify(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 16));
