/**
 * This problem was asked by Amazon.

Given a sorted array, find the smallest positive integer that is not the sum of a subset of the array.

For example, for the input [1, 2, 3, 10], you should return 7.

Do this in O(N) time.
*/

function smallPositiveInteger(array) {
    let i = 1; 
    let sum = 0;
    while(i <= array.length) {
        if(array[i-1] !== i) {
            if(array[i-1] > sum) {
                return ++sum;
            } else {
                return 1 + sum + array[i-1];
            }
        }
        sum = sum + i;
        i++;
    }
    return ++sum;
}

console.log(smallPositiveInteger([1, 2, 3, 4, 11]));