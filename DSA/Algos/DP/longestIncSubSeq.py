def longestIncSubSeq(array):
    if(not array):
        return 0

    if(len(array) == 1):
        return 1

    if(array[0] < array[1]):
        return 1 + longestIncSubSeq(array[1:])
    else:
        return longestIncSubSeq(array[1:])

print(longestIncSubSeq([5,1,3,2,4]))

def longestIncSubSeqWithIndex(array, i):
    if(not array):
        return 0

    if(len(array) == 1):
        return 1

    if(i == len(array)):
        return 0
    
    if(array[i-1] < array[i]):
        return 1 + longestIncSubSeqWithIndex(array, i+1)
    else:
        return longestIncSubSeqWithIndex(array, i+1)

print(longestIncSubSeqWithIndex([5,1,4,6,3,7,8], 0))

def longestIncSubSeqLoop(array):
    if(not array):
        return 0

    dp = [1 for i in range(len(array))]

    for i in range(len(array)):
        for j in range(0, i):
            if(array[j] < array[i]):
                dp[i] = max(dp[i], dp[j] + 1)

    return dp[-1]
    

print(longestIncSubSeqLoop([5,1,4,6,3,7,8]))