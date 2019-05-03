function subsetSum(array, k) {
    return subsetSumHelper(k, array, 0);
}

function subsetSumHelper(k, array, sum) {
    if(k === sum) {
        return [];
    }
    
    if (array.length == 0 && k !== sum) {
        return null;
    }

    let res1 = subsetSumHelper(k, array.slice(1), sum + array[0]);
    let res2 = subsetSumHelper(k, array.slice(1), sum);

    if (res1) {
        return [array[0], ...res1];
    }
    
    if (res2) {
        return [...res2];
    }
}

console.log(subsetSum([12, 1, 19, 5, 9, 2], 24));

function subsetDp() {

}