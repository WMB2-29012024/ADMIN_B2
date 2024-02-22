# Problem 1

[2798. Number of Employees Who Met the Target](https://leetcode.com/problems/number-of-employees-who-met-the-target/description/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

- Initialize a variable to keep track of the count of employees meeting the target hours.
- Iterate to hours array to get each employee's hours
- Check if the current employee's hours meet or exceed the target, if so, increment the count by 1
- Return the count of employees meeting the target.

# Problem 2

[344. Reverse String](https://leetcode.com/problems/reverse-string/description/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

- Initialize a pointer j at the end of the string.
- Iterate through the first half of the string.
- Store the character at position i in a temporary variable.
- Replace the character at position i with the character at position j.
- Replace the character at position j with the character stored in the temporary variable.
- Move the pointer j towards the beginning of the string.

# Problem 3

[2703. Return Length of Arguments Passed](https://leetcode.com/problems/return-length-of-arguments-passed/description/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

- Define a function called argumentsLength.
- Initialize a variable count to 0 to keep track of the number of arguments.
- Iterate over each argument in the list of arguments via loop.
- For each argument encountered, increment the count by 1.
- After iterating through all arguments, return the count, which represents the total number of arguments passed to the function.

# Problem 4

[2469. Convert the Temperature](https://leetcode.com/problems/convert-the-temperature/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

**Utils**

- `Kelvin = Celsius + 273.15`
- `Fahrenheit = Celsius * 1.80 + 32.00`

# Problem 5

[58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

**Note :** Do not use any built-in method ( excluding `charAt` & `length` )

- Separate string by "` `" ( spaces ) and store separated words in a array.
- return the length of last element of that array.

# Problem 6

[121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

- Initialize min_price to infinity and max_profit to 0.
- Loop through each price in the array:
  - Update min_price to the minimum of min_price and the current price.
  - Update max_profit to the maximum of max_profit and the difference between the current price and min_price.
- Return max_profit.

# Problem 7

[387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

- Create a function that takes a string `s` as input.
- Initialize an empty object to store the count of each character in the string.
- Loop through the string and count the occurrences of each character by updating the object.
- Loop through the string again and find the first character with a count of 1.
- Return the index of that character.
- If no such character is found, return -1.

# Problem 8

[2351. First Letter to Appear Twice](https://leetcode.com/problems/first-letter-to-appear-twice/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

- Start by creating an empty object to track seen characters.
- Loop through each character in the input string.
- Check if the current character is already in the object.
- If it is, return it as the first duplicate.
- If not, add the character to the object.
- Continue looping until a duplicate is found or until the end of the string.

# Problem 9

[2057. Smallest Index With Equal Value](https://leetcode.com/problems/smallest-index-with-equal-value/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

- Loop through the array `nums` and check each element against its index modulo 10.
- If the condition `i mod 10 == nums[i]` is satisfied for any index `i`, return that index.
- If no such index is found, return -1.

# Problem 10

[520. Detect Capital](https://leetcode.com/problems/detect-capital/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

- Check if all letters in the word are uppercase. If they are, return true.
- Check if all letters in the word are lowercase. If they are, return true.
- Check if only the first letter is uppercase and the rest are lowercase. If so, return true.
- If none of the above conditions are met, return false.

# Problem 10

[2129. Capitalize the Title](https://leetcode.com/problems/capitalize-the-title/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

- Split the input string into an array of words.
- Iterate over each word in the array.
- For each word, check its length.
- If the length is 1 or 2, convert the word to lowercase.
- Otherwise, capitalize the first letter and convert the rest to lowercase.
- Join the modified words back into a string.
- Return the capitalized title.
