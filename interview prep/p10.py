def maximum(a,b,c):
    if (a >=b) and (a >=c):
        largest =a 
    elif (b>=a) and (b>=c):
        largest =b
    else:
        largest =c 
    return largest

a = int(input("Enter a number:"))

b = int(input("Enter a number:"))

c = int(input("Enter a number:"))

print(maximum(a,b,c))