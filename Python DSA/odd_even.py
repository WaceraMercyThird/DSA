#  You are given an array arr[]. Your task is to count the number of even and odd elements. Return first odd count then even count.
# ............TOTAL NUMBER OF EVEN AND ODD NUMBERS...........
arr = [1, 2, 3, 4, 5, 6]

counts = []        # Create an empty array (list)

odd = 0
even = 0

for num in arr:
    if num % 2 == 0:
        even += 1
    else:
        odd += 1

counts.append(odd)   # Add odd count first
counts.append(even)  # Add even count next

print(counts)        # Print the final array



# ............LIST OF EVEN AND ODD NUMBERS...........

arr = [1, 2, 3, 4, 5, 6]          # 1. This is your input array of numbers

odd_numbers = []                 # 2. This list will store all odd numbers
even_numbers = []                # 3. This list will store all even numbers

for num in arr:                  # 4. Loop through each number in the array
    if num % 2 == 0:             # 5. If the number is divisible by 2, it's even
        even_numbers.append(num) # 6. Add it to the even_numbers list
    else:                        # 7. Otherwise, it's odd
        odd_numbers.append(num)  # 8. Add it to the odd_numbers list

print("Odd numbers:", odd_numbers)   # 9. Print the list of odd numbers
print("Even numbers:", even_numbers) # 10. Print the list of even numbers

