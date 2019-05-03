export function quickSort(arr) {
    qsHelper(arr, 0, arr.length - 1);
}

function qsHelper(arr, start, end) {
    if (start < end) {
        const splitIndex = getIndex(arr, start, end);
        qsHelper(arr, start, splitIndex - 1);
        qsHelper(arr, splitIndex + 1, end);
    }
}

function getIndex(arr, start, end) {
    let i = start - 1;
    for (let j = start; j < end; j++) {
        if (arr[j] > arr[end]) {
            i++;
            swap(arr, i, j);
        }
    }

    i++;
    swap(arr, i, end);

    return i;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// var a = [5, 3, 2, 4, 1, 5];
// quickSort(a);
// console.log(a);