#  Write a code to reverse a string using a stack.

def reverse_string(s):
    stack = []

    # Push all characters to the stack
    for char in s:
        stack.append(char)

    reversed_str = ''

    # Pop all characters from the stack
    while stack:
        reversed_str += stack.pop()

    return reversed_str

# Example usage
input_str = "hello world"
reversed_str = reverse_string(input_str)
print("Reversed:", reversed_str)
