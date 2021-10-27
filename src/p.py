# def func(*args):
#     add = 0
#     print(type(args))
#     for arg in args:
#         for item in arg:
#           if item> add:
#             add=item
#     return add
    
# aList = [4, 6, 8, 24, 12, 2]
# print(func(aList))


# def add(n):
#     if n == 1:
#         return n
#     return add(n-1)
# print(add(5))

# def commonCharacterCount(s1, s2):
#     string1 = list(s1)
#     string2 = list(s2)
#     for i in string1:
#         if i in string2:
#             string2.remove(i)
#             count=count+1
#     return(count)

# # print(commonCharacterCount("abca","xyzbac"))
# print(commonCharacterCount("123","123"))


def isLucky(n):
    n=str(n)
    lenght = len(str(n))//2
    sum1 = 0
    sum2 = 0
    for i in range(lenght):
        sum1+=int(n[i])
    for j in range(lenght,len(n)):
        print(n[j])
        sum2+=int(n[j])
    print(sum1,sum2)
    if sum1==sum2:
        return True
    else:
        return False

print(isLucky(134008))

        
