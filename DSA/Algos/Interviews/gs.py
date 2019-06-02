def isValid(digits):
    cache = {}
    for i in range(0, len(digits)):
        if(digits[i] in cache):
            return False
        else:
            cache[digits[i]] = 1

        if(int(digits[i]) < 1 or int(digits[i]) > 9):
            return False

    return True

def backtrack(pattern, digits, start, lenOfPat):
    print(pattern, digits, start, lenOfPat)
    if(len(pattern) == 0):
        return digits

    if(pattern[0] == "M"):
        for i in range(1, start):
            digits = digits + str(i)
            if(isValid(digits)):
                digits = backtrack(pattern[1:], digits, i, lenOfPat)
                if(lenOfPat + 1 == len(digits)):
                    return digits

            digits = digits[:-1]
    else:
        for i in range(start+1, 10):
            digits = digits + str(i)
            if(isValid(digits)):
                digits = backtrack(pattern[1:], digits, i, lenOfPat)
                if(lenOfPat + 1 == len(digits)):
                    return digits

            digits = digits[:-1]

    return digits

print(backtrack("NMNM", "1", 1, 4))