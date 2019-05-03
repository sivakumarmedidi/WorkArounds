//Find median, find kth min, kth max

function quickSelect(array, k) {
    return quickSelectHelper(array, 0, array.length - 1, k);
}

function quickSelectHelper(array, start, end, k) {
    if(start == end) {
        return array[start];
    }

    const partitionIndex = partition(array, start, end);
    if(partitionIndex == k) {
        return array[k];
    } else if (partitionIndex > k) {
        return quickSelectHelper(array, start, partitionIndex-1, k);
    } else {
        return quickSelectHelper(array, partitionIndex+1, end, k);
    }
}

function partition(array, start, end) {
    const pivot = array[end];

    let i = start - 1;
    let j = start;
    while(j < end) {
        if(array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
        j++;
    }

    swap(array, i+1, end);

    return i+1;
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

console.log(quickSelect([7,3,1,2,8,4,6], 6))