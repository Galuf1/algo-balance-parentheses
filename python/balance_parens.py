import re
def balance_parens(str):
    strL = list(str)
    stack = []
    # print(strL)

    for i in range(len(str)):
        if str[i] == "(":
            stack.append(i)
        if str[i] == ")":
            if len(stack) == 0:
                strL[i] = ""
            else:
                stack.pop()
    for j in stack:
        strL[j] = ""
    result= ''.join(strL)
    return result
    
