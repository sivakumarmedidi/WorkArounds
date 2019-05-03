# Given a string S with repeated characters (only lowercase). The task is to rearrange characters in a string such that no two adjacent characters are same.

# Note : It may be assumed that the string has only lowercase English alphabets.

# Input:
# The first line of input contains an integer T denoting the number of test cases. Then T test cases follow. Each test case contains a single line containing a string of lowercase english alphabets.

# Output:
# For each test case in a new line print "1" (without quotes) if the generated string doesn't contains any same adjacent characters, else if no such string is possible to be made print "0" (without quotes).

# Constraints:
# 1 <= T <= 100
# 1 <= length of string <= 104

# Example:
# Input:
# 3
# geeksforgeeks
# bbbabaaacd
# bbbbb

# Output:
# 1
# 1
# 0

# Explanation:
# Testcase 1: All the repeated characters of the given string can be rearranged so that no adjacent characters in the string is equal.
# Testcase 3: Repeated characters in the string cannot be rearranged such that there should not be any adjacent repeated character.

#code

def possible(string):
    hash = {};
    for i in string:
        hash[i] = hash[i]+1 if i in hash else 1

    possible = False;    
    while(len(hash) > 1):
        keys = hash.keys();
        maxKey = list(keys)[0];
        minKey = list(keys)[len(hash)-1];
        for key in hash.keys():
            if(hash[maxKey] < hash[key]):
                maxKey = key;
            if(hash[minKey] > hash[key]):
                minKey = key;
            
        hash[maxKey] = hash[maxKey] - hash[minKey]
        del hash[minKey];
        if(not hash[maxKey]):
            del hash[maxKey]
            possible = True;
            break;
        
        print(hash);

    if(possible): 
        return 1

    if(len(hash) and hash[list(hash.keys())[0]] > 1):
        return 0
    else:
        return 1

for i in range(0, int(input())):
    string = input();
    print(possible(string));