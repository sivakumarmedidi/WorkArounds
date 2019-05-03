function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function sortArray(array) {
    let r = 0;
    let b = array.length - 1;

    for(let i = 0; i <= b; i++) {
        if(array[i] === "R") {
            swap(array, r, i);
            r++;
        } else if (array[i] === "B") {
            swap(array, b, i);
            b--;
            if(array[i] == "R") {
                swap(array, r, i);
                r++;
            }
        }
    }

    return array;
}

console.log(sortArray(['G', 'B', 'R', 'R', 'B', 'R', 'G']));
console.log(sortArray(['B', 'G', 'R', 'B', 'G', 'R', 'B', 'G', 'R']));