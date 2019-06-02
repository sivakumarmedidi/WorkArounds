def lcsseq(str1, str2):
    if(len(str1) == 0 or len(str2) == 0):
        return 0

    if(str1[0] == str2[0]):
        return 1 + lcsseq(str1[1:], str2[1:])
    else:
        return max(lcsseq(str1, str2[1:]), lcsseq(str1[1:], str2))

print(lcsseq("abde", "aedwe"))


def lcs_seq_dp(str1, str2):
    dp = [[0 for j in range(len(str2)+1)] for i in range(len(str1)+1)]

    for i in range(len(str1)+1):
        for j in range(len(str2)+1):
            if(i == 0 or j == 0):
                dp[i][j] = 0
            elif(str1[i-1] == str2[j-1]):
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i][j-1], dp[i-1][j])

    print(dp)
    return dp[-1][-1]

print(lcs_seq_dp("abde", "aedwe"))   
