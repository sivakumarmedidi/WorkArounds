export function mergeSort(arr) {
    msHelper(arr, 0, arr.length - 1);
}

function msHelper(arr, start, end) {
    if (start < end) {
        const mid = parseInt((start + end) / 2);
        msHelper(arr, start, mid);
        msHelper(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }
}

function merge(arr, start, mid, end) {
    const temp = new Array(end - start + 1);
    let i = start, j = mid + 1, k = 0;

    while (i <= mid && j <= end) {
        if (arr[i] < arr[j]) {
            temp[k] = arr[i];
            i++;
        } else {
            temp[k] = arr[j];
            j++;
        }
        k++;
    }

    while (i <= mid) {
        temp[k] = arr[i];
        i++; k++;
    }

    while (j <= end) {
        temp[k] = arr[j];
        j++; k++;
    }

    let l = 0, m = start;
    while (l < end - start + 1) {
        arr[m] = temp[l];
        m++;
        l++;
    }
}

// var a = [1, 1, 5, 3, 4, 2, 1];
// mergeSort(a)
// console.log(a);