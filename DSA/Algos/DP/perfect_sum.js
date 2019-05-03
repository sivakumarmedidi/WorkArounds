/**
 * Given an array an integer k, print all subsets of the array that sum up to k
 */
function isSumEql(array, sum, start, subset = []) {
    if(sum == 0) {
        console.log(subset);
        return;
    }

    if(sum < 0) {
        return;
    }

    if(start < array.length) {
        isSumEql(array, sum - array[start], start+1, subset.concat(array[start]));
    }

    if(start + 1 < array.length) {
        isSumEql(array, sum, start+1, subset);
    }
}

console.log(isSumEql([1,2,3,5,4], 10, 0));

function iss(array, sum, start, subset = []) {
    if(sum == 0) {
        console.log(subset);
        return true;
    }

    if(sum && start == array.length) {
        return false;
    }

    return iss(array, sum - array[start], start+1, subset.concat(array[start])) || iss(array, sum, start+1, subset);
}

console.log("----");
console.log(iss([1,2,3,5,4], 10, 0));


function isSumEqlBottomUp(array, sum, sumTemp, start, subset = []) {
    if(sum == sumTemp) {
        console.log(subset);
        return;
    }

    if(sum < sumTemp) {
        return;
    }

    if(start < array.length) {
        isSumEqlBottomUp(array, sum, sumTemp + array[start], start+1, subset.concat(array[start]));
    }

    if(start + 1 < array.length) {
        isSumEqlBottomUp(array, sum, sumTemp, start+1, subset);
    }
}
console.log("----");
console.log(isSumEqlBottomUp([1,2,3,5,4], 10, 0, 0));

// function isSumEqlDp(array, sum) {
//     const dp = new Array(array.length);
//     for(let i = 0; i < array.length; i++) {
//         dp[i] = new Array(sum+1);
//     }

//     for(let i = array.length-1; i >= 0; i--) {
//         for(let s = sum; s >= 0; s--) {
//             if(s === sum) {
//                 dp[i][s] = true;
//                 continue;
//             }

//             dp[i][s] = (dp[])
//         }
//     }
// }