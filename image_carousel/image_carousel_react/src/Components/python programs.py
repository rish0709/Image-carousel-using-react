# class Parent:
#     def speak(self):
#         print("parent speaks")

# class Child(Parent):
#     def talk(self):
#         print("child speaks")

# child = Child()
# child.speak()
# child.talk()

# add2 = lambda x, y: x - y 
# print(add2(4, 5))

# Define a generator function
# def count_up_to(limit):
#     count = 1
#     while count <= limit:
#         yield count  # Yield the current count
#         count += 1

# # Create a generator object
# counter = count_up_to(5)

# # Iterate over the generator to generate values lazily
# for num in counter:
#     print(num)  # Output: 1, 2, 3, 4, 5

# # Generator will not produce more values after exhaustion
# for num in counter:
#     print(num)  # No output, since the generator has already been exhausted

# Define a decorator function
# def my_decorators(func):
#     def wrapper():
#         print("inside wrapper")
#         func()
#     return wrapper


# def sayHello():
#     print("in say hello")

# sayHello = my_decorators(sayHello)
# sayHello()

# def bubble_sort(arr):
#     n = len(arr)
#     # Traverse through all elements in the list
#     for i in range(n):
#         # Last i elements are already in place
#         for j in range(0, n - i - 1):
#             # Traverse the list from 0 to n-i-1
#             # Swap if the element found is greater than the next element
#             if arr[j] > arr[j+1]:
#                 arr[j], arr[j+1] = arr[j+1], arr[j]

# # Example usage:
# my_list = [64, 34, 25, 12, 22, 11, 90]
# bubble_sort(my_list)

# print("Sorted list:", my_list)


a = [1,2,3,4]
b = a
c = a[:]

b[0] = 6

print(a) #[6,2,3,4]

c[0] = 5
print(a) #[6,2,3,4]






