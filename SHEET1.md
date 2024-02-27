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

- Split the input string into an array of words. (Need more details)
- Iterate over each word in the array.
- For each word, check its length.
- If the length is 1 or 2, convert the word to lowercase.
- Otherwise, capitalize the first letter and convert the rest to lowercase.
- Join the modified words back into a string.
- Return the capitalized title.

# Problem 11

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

# Problem 12

[709. To Lower Case](https://leetcode.com/problems/to-lower-case/)

> ## Psuedo Code

**To solve this problem in JavaScript, you can follow these steps:**

- Initialize an empty string `str` to store the converted string
- Iterate through each character in the input string.
- Store the character at the current index `i` of the input string `s` and assigns it to the variable `ch`
- Check if the character is an uppercase letter using its ASCII code.
- If the character is uppercase, it converts it to lowercase by adding 32 to its character code (this is the difference between the ASCII codes of uppercase and lowercase letters) and then converting it back to a character using `String.fromCharCode()`.
- Otherwise, keep the character unchanged.
- Concatenate the modified characters to form the resulting string.
- Return the resulting string.

# Problem 13

[2243. Calculate Digit Sum of a String](https://leetcode.com/problems/calculate-digit-sum-of-a-string/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

- Start a while loop, that continues until the length of string s is greater than k. It ensures that the length of the string is reduced to k digits or less.
- Initializes an empty string `newString` to store the concatenated digits and an empty array groups to store the groups of `k` digits.
- Iterate over the string `s` in steps of `k`, pushing substrings of length `k` into the groups array.
- Iterate over each group of digits in groups, converts them to integers using parseInt, and append them to the `newString`.
- Updates the value of `s` with the concatenated digits stored in newString.
- Once the length of `s` is reduced to k digits or less, the function returns the modified string `s`.

# Problem 14

[2544. Alternating Digit Sum](https://leetcode.com/problems/alternating-digit-sum/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

- Initialize a variable `sum` to store the sum of the digits. Set it to 0.
- Convert the input number `n` to a string using the `toString()` method and store it in the variable `str`. This allows easier access to individual digits.
- Iterate through each character in the string representation of `n` using a for loop.
- Inside the loop:
  - Convert the character at the current index `i` back to an integer using `parseInt(str.charAt(i))`. Store this value in the variable `num`.
  - Check if the index `i` is even or odd by checking the remainder when divided by 2 (`i % 2`). If `i` is odd (not divisible by 2), subtract the current digit `num` from the `sum`. Otherwise (if `i` is even), add `num` to the `sum`.
- After iterating through all the digits, return the final `sum`.

# Problem 15

[1342. Number of Steps to Reduce a Number to Zero](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

- Initializes a variable `steps` to keep track of the number of steps needed to reduce `num` to zero.
- Start a while loop that continues as long as `num` is greater than 0. The loop will terminate when `num` becomes 0.
- Checks if `num` is even or not by using the modulo operator `%`.
  - If `num` is even, it is divided by 2. This operation effectively reduces `num` by half.
  - If `num` is odd, it means that subtracting 1 from `num` will make it even. So, in this case, 1 is subtracted from `num`.
- Increments the `steps` variable by 1 in each iteration of the loop. It counts how many steps are taken to reduce `num` to 0.
- Once the loop terminates (when `num` becomes 0), return step.
  In summary, this function calculates the number of steps required to reduce a given number `num` to 0 by following two rules:
- If `num` is even, divide it by 2.
- If `num` is odd, subtract 1 from it.

# Problem 16

[2413. Smallest Even Multiple](https://leetcode.com/problems/smallest-even-multiple/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

- Initializes a variable `i` to start from `1`. This variable `i` will be used to find multiples of `n`.
- Start an infinite loop. This loop will keep running until a `return` statement is executed, breaking the loop.
- Check if the product of `n` and `i` is divisible by 2 (i.e., if it's an even number).
- If the condition is true, returns the value of `n*i`, which is the smallest multiple of `n` that is also an even number.

# Problem 17

[1952. Three Divisors](https://leetcode.com/problems/three-divisors/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

- Initialize a variable `count` to keep track of the number of divisors found.
- Start a loop that iterates from `1` to `n`.
- Checks if the current number (`i`) divides `n` evenly (i.e., with no remainder) using the condition `n % i === 0`. If the condition is true, it means that `i` is a divisor of `n`, so it increments the `count` variable by 1.
- Finally, returns `true` if `count` is `3`, indicating that `n` has exactly three divisors; otherwise, it returns `false`.
  In summary, the function determines if a given number `n` has exactly three divisors by counting the number of divisors it has and checking if that count equals `3`.

# Problem 18

[1979. Find Greatest Common Divisor of Array](https://leetcode.com/problems/find-greatest-common-divisor-of-array/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

- Initializes a variable `count` to keep track of the number of divisors found.
- Start a loop that iterates from `1` to `n`.
- Checks if the current number (`i`) divides `n` evenly (i.e., with no remainder) using the condition `n % i === 0`. If the condition is true, it means that `i` is a divisor of `n`, so it increments the `count` variable by 1.
- Finally, returns `true` if `count` is `3`, indicating that `n` has exactly three divisors; otherwise, it returns `false`.

In summary, the function determines if a given number `n` has exactly three divisors by counting the number of divisors it has and checking if that count equals `3`.

# Problem 19

[2553. Separate the Digits in an Array](https://leetcode.com/problems/separate-the-digits-in-an-array/)

> ## Psuedo Code

**To solve this problem, you can follow these steps:**

- Initialize an empty array `answer` to store the separate digits extracted from the numbers in the input array.
- Iterates over each number `num` in the input array `nums`.
- Initialize a variable `n` to store the current number being processed.
- Initialize an empty array `digits` to store the digits of the current number.
- Start a loop that, continues until `n` becomes 0.
  - Inside the loop, calculate the last digit of `n` using the modulus operator (`n % 10`) and adds it to the beginning of the `digits` array.
  - Then, update `n` by removing the last digit using `Math.floor(n / 10)`.
- After extracting all the digits of the current number, push these digits into the `answer` array.
- Once all numbers in the input array have been separated, return the `answer` array.
- Summary : This function takes an array of numbers as input, separates the digits of each number, and returns an array containing all the separate digits extracted from the input numbers. It accomplishes this by iterating over each number, extracting its digits, and storing them in a separate array, which is then concatenated into the final result.

# Problem 19

[1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/description/)

/\*\*

- @param {string} sentence
- @param {string} searchWord
- @return {number}
  \*/
  var isPrefixOfWord = function(sentence, searchWord) {
  sentenceArr = splitSentence(sentence);
  // sentenceArr = sentence.split(" ");
  for (let i = 0; i < sentenceArr.length; i++ ) {
  let isPrefix = true;
  for (let j = 0; j < searchWord.length; j++) {
  if (sentenceArr[i][j] !== searchWord[j]) {
  isPrefix = false;
  break;
  }
  }
  if (isPrefix) {
  return i+1;
  }
  }
  return -1;
  };

function splitSentence(sentence) {
const words = [];
let word = '';

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char === ' ') {
            if (word !== '') {
                words.push(word);
                word = '';
            }
        } else {
            word += char;
        }
    }

    if (word !== '') {
        words.push(word);
    }

    return words;

}

# Problem 20

[1961. Check If String Is a Prefix of Array](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/description/)

/\*\*

- @param {string} s
- @param {string[]} words
- @return {boolean}
  \*/
  var isPrefixString = function(s, words) {
  str = "";
  if(words[0]!== s.substring(0,words[0].length)) return false;
  for(let i = 0; i < words.length; i++){
  str += words[i];
  console.log(str)
  if (str===s) return true
  }
  return false;
  };

# Problem 21

[520. Detect Capital](https://leetcode.com/problems/detect-capital/description/)

/\*\*

- @param {string} word
- @return {boolean}
  \*/
  var detectCapitalUse = function(word) {
  if(myToLowerCase(word)===word) return true;
  if(myToUpperCase(word)===word) return true;
  const capitalChar = myToUpperCase(word[0]) + myToLowerCase(mySubstring(word,1));
  if(capitalChar===word) return true;
  return false;
  };

var myToLowerCase = function(s) {
let str = "";
for (let i = 0; i < s.length; i++) {
let ch = s.charCodeAt(i);
if (ch > 64 && ch < 91) {
str = str + String.fromCharCode(ch + 32);
}else{
str = str + s[i];
}
}
return str;
};

var myToUpperCase = function(s) {
let str = "";
for (let i = 0; i < s.length; i++) {
let ch = s.charCodeAt(i);
if (ch > 96 && ch < 123) {
str = str + String.fromCharCode(ch - 32);
}else{
str = str + s[i];
}
}
return str;
};

var mySubstring = function(s,idx,end=s.length) {
let str = "";
for(let i = idx; i < end; i++){
str += s[i]
}
return str ;
}

# Problem 22

[26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

var removeDuplicates = function(nums) {
let count = 0;
for (let i = 0; i < nums.length; i++) {
if (i === 0 || nums[i] !== nums[i - 1]) {
nums[count++] = nums[i];
}
}
return count;
};
