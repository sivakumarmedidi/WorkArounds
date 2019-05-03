/**
 * 
This problem was asked by Microsoft.

Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.

Recall that the median of an even-numbered list is the average of the two middle numbers.

For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

2
1.5
2
3.5
2
2
2 
 */

function runningMedians(input) {
    let sortedArray = [];
    let medians = [];
    for (let i = 0; i < input.length; i++) {
        binaryInsert(sortedArray, input[i]);
        if (i % 2 == 0) {
            medians.push(sortedArray[i / 2])
        } else {
            medians.push((sortedArray[(i - 1) / 2] + sortedArray[(i + 1) / 2]) / 2)
        }
    }
    console.log(medians);
}

function binaryInsert(array, x) {
    let index = binaryInsertHelper(array, x, 0, array.length - 1);
    array.splice(index, 0, x);
}

function binaryInsertHelper(array, x, start, end) {
    if (start > end) {
        return start;
    } else {
        let mid = parseInt((start + end) / 2);
        if (array[mid] > x) {
            return binaryInsertHelper(array, x, start, mid - 1);
        } else if (array[mid] < x) {
            return binaryInsertHelper(array, x, mid + 1, end);
        } else {
            return mid + 1;
        }
    }
}

runningMedians([2, 1, 5, 7, 2, 0, 5])
runningMedians([1,2,3,4,5,6,7])
runningMedians([7,6,5,4,3,2,1])

/** DCP Solution
def get_median(min_heap, max_heap):
    if len(min_heap) > len(max_heap):
        return min_heap.find_min()
    elif len(min_heap) < len(max_heap):
        return max_heap.find_max()
    else:
        min_root = min_heap.find_min()
        max_root = max_heap.find_max()
        return (min_root + max_root) / 2

def add(num, min_heap, max_heap):
    # If empty, then just add it to the max heap.
    if len(min_heap) + len(max_heap) <= 1:
        max_heap.insert(num)
        return

    median = get_median(min_heap, max_heap)
    if num > median:
        # add it to the min heap
        min_heap.insert(num)
    else:
        max_heap.insert(num)

def rebalance(min_heap, max_heap):
    if len(min_heap) > len(max_heap) + 1:
        root = min_heap.extract_min()
        max_heap.insert(root)
    elif len(max_heap) > len(min_heap) + 1:
        root = max_heap.extract_max()
        min_heap.insert(root)

def print_median(min_heap, max_heap):
    print(get_median(min_heap, max_heap))

def running_median(stream):
    min_heap = minheap()
    max_heap = maxheap()
    for num in stream:
        add(num, min_heap, max_heap)
        rebalance(min_heap, max_heap)
        print_median(min_heap, max_heap)
 * 
 */