#palindrome or not

num = int(input("Enter a number:"))

#input: 1234
temp  = num 
reverse = 0
while temp > 0:
        remainder = temp % 10
        reverse = (reverse * 10) + remainder
        temp = temp // 10
        if num == reverse:
            print('Palidrome')
        else:
            prime("Not palidrome")