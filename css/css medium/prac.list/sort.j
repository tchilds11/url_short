def sort_string(list_2, code):
    new_string = []
    for j in code:
        for i in range(0, len(list_2)):
            if i == code[j]:
                new_string.append(list_2[i])
    return new_string
print(sort_string(s, indices))