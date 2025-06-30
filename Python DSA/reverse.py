s = "hello world"                  # 1. Original string
stack = list(s)                    # 2. Convert string to a list (acts as a stack)
reversed_str = ""                  # 3. Initialize an empty string to store the result

while stack:                       # 4. Loop until the stack is empty
    reversed_str += stack.pop()    # 5. Pop characters and build the reversed string

print("Reversed:", reversed_str)   # 6. Output the reversed string
