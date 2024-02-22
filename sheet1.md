# Problem 1
[2798. Number of Employees Who Met the Target](https://leetcode.com/problems/number-of-employees-who-met-the-target/description/)
# Psuedo Code
* Initialize a variable to keep track of the count of employees meeting the target hours.
* Iterate to hours array to get each employee's hours
* Check if the current employee's hours meet or exceed the target, if so, increment the count by 1
* Return the count of employees meeting the target.

# Problem 2
[344. Reverse String](https://leetcode.com/problems/reverse-string/description/)
# Psuedo Code
* Initialize a pointer j at the end of the string.
* Iterate through the first half of the string.
* Store the character at position i in a temporary variable.
* Replace the character at position i with the character at position j.
* Replace the character at position j with the character stored in the temporary variable.
* Move the pointer j towards the beginning of the string.

# Problem 3
[2703. Return Length of Arguments Passed](https://leetcode.com/problems/return-length-of-arguments-passed/description/)
# Psuedo Code

* Define a function called argumentsLength.
* Initialize a variable count to 0 to keep track of the number of arguments.
* Iterate over each argument in the list of arguments via loop.
* For each argument encountered, increment the count by 1.
* After iterating through all arguments, return the count, which represents the total number of arguments passed to the function.

# Problem 4
[2469. Convert the Temperature](https://leetcode.com/problems/convert-the-temperature/)
# Psuedo Code
**Utils**
-   `Kelvin = Celsius + 273.15`
-   `Fahrenheit = Celsius * 1.80 + 32.00`

# Problem 5
[58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/)
# Psuedo Code
**Note :** Do not use any built-in method ( excluding `charAt` & `length` )
* Separate string by  "` `"  ( spaces )  and store separated words in a array.
* return the length of last element of that array.