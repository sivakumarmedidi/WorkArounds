def find_sentence(s, dictionary):
    starts = {0: ''}
    for i in range(len(s) + 1):
        new_starts = starts.copy()
        for start_index, _ in starts.items():
            word = s[start_index:i]
            if word in dictionary:
                new_starts[i] = word
        starts = new_starts.copy()

    print(starts);
    result = []
    current_length = len(s)
    if current_length not in starts:
        return None
    while current_length > 0:
        word = starts[current_length]
        current_length -= len(word)
        result.append(word)

    return list(reversed(result))

print(find_sentence("bedbathandbeyond", {
    "bed": 1,
    "bath": 1,
    "bedbath": 1,
    "and": 1,
    "beyond": 1
}))