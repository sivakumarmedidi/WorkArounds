function LN(A){
    function compare(aStr, bStr) {
        if(aStr.length > bStr.length && aStr.slice(0, bStr.length) == bStr) {
            console.log("top")
            if(parseInt(bStr[bStr.length - 1]) > parseInt(aStr[bStr.length])) {
                console.log("top1")
                return -1;
            } else {
                return 1;
            }
        } else if (aStr.length < bStr.length && bStr.slice(0, aStr.length) == aStr) {
            console.log("next")
            if(parseInt(aStr[aStr.length - 1]) > parseInt(bStr[aStr.length])) {
                console.log("next1")
                return 1;
            } else {
                return -1;
            }
        } else if(aStr > bStr) {
            return -1;
        } else if (aStr < bStr) {
            return 1;
        }
        
        return 0;
    }
    
    
    var stringSortedArray = A.sort(compare);
    
    return parseInt(stringSortedArray.join("")) + "";
}

LN([12, 121]);