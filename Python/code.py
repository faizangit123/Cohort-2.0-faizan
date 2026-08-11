from functools import reduce
# import math
# def factorial(n):
#   fact = 1
#   for i in range(1,n+1):
#     fact = fact*i
#   return fact
# print(factorial(5))  

# def fab(n):
#   a, b = 0, 1
#   for i in range(n):
#     print(a, end='')
#     a, b = b, a+b
# fab(7)      

# squares = [num ** 2 for num in range(5)]
squares = []
for num in range(5):
    squares.append(num ** 2)
print(squares)

number = [1,2,3,4,5,6]
squ = list(map(lambda x: x*x, number))
print(squ)

number1 = [1,2,3,4,5,6]
squ1 = list(filter(lambda x: x%2==0, number1))
print(squ1)

number2 = [1,2,3,4,5,6]
squ2 = reduce(lambda x,y:x+y, number2)
print(squ2)

def my_function(*args, **kwargs):
    print(args)      # Tuple of positional arguments
    print(kwargs)    # Dictionary of keyword arguments

my_function(1, 2, 3, name="John", age=25)
# args = (1, 2, 3)
# kwargs = {'name': 'John', 'age': 25}