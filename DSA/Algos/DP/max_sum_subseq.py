def maxSumSubSeq(array):
    if(not array):
        return 0
    
    if(len(array) == 1):
        return array[0]

    sum = maxSumSubSeq(array[1:])

    if(array[0] > 0):
        return sum + array[0]
    else:
        return sum

print(maxSumSubSeq([1,2,-3,4]))