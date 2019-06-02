# Given an array an integer k, print all subsets of the array that sum up to k

def perfect_sum_subset(array, k, subset):
    if(k == 0):
        print(subset)
        return

    if(len(array) == 0):
        return

    one = subset.copy()
    one.append(array[0])
    perfect_sum_subset(array[1:], k - array[0], one)
    perfect_sum_subset(array[1:], k, subset)


perfect_sum_subset([1,2,3,4], 6, [])

def perfect_sum_subset_index(array, k, index, subset):
    if(k == 0):
        print(subset)
        return

    if(index >= len(array)):
        return

    one = subset.copy()
    one.append(array[index])
    perfect_sum_subset_index(array, k - array[index], index+1, one)
    perfect_sum_subset_index(array, k, index+1, subset)


perfect_sum_subset_index([1,2,3,4], 6, 0, [])

def perfect_sum_subset_dp(array, k):
    if(not array):
        
