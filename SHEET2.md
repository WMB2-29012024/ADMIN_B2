[1662. Check If Two String Arrays are Equivalent](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/)

  

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

  

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]

Output: true

  

> ## pseudo code:-

  

- step 1: create two variable wordcount1 and wordcount2 and initialize with blank (wordStr1="" and wordStr2="") string, then

- step 2: iterate over word1[] and concatenate every index word1[i] in  wordStr1=wordStr1+word1[i]

- step 3: repeat step 2 over word2 in wordStr2

- step 4: check wordStr1 === wordStr2
              if equal then return true else return false

  
  

[ 2703. Return Length of Arguments Passed ](https://leetcode.com/problems/return-length-of-arguments-passed/description/)

  

Write a function argumentsLength that returns the count of arguments passed to it.

  

> ## pseudo code:-

- step 1: Start with initializing `argsLength` variable to 0.

- step 2: Iterate over each element in the array `args` using a for loop with index variable i ranging from 0 to the length of the `args` array.
Inside the loop:
Increment the argsLength variable by 1 for each iteration

- step 3: After the loop ends, return the value of argsLength.

  

[ 2185. Counting Words With a Given Prefix ](https://leetcode.com/problems/counting-words-with-a-given-prefix/description/)

You are given an `array` of `strings` words and a string `pref`.

  

Return the number of strings in words that contain `pref` as a prefix.

  

A prefix of a string s is any leading contiguous substring of `s`.

  
> ## pseudo code:-

  

- step 1: Initialize a variable count to 0

- step 2: Iterate over each word in words array
for each word in words:

- step 3: Check if the current word starts with pref
if word starts with pref:

- step 4: Increment count by 1

- step 5: Return count

  

[ 2255. Count Prefixes of a Given String ](https://leetcode.com/problems/count-prefixes-of-a-given-string/description/)

  

You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

  

Return the number of strings in words that are a prefix of s.

  

A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.

  

> ## pseudo code:-

  

- step 1: Initialize a variable count to 0

- step 2: Iterate over each word in words array
for i from 0 to words.length - 1:
set word = words[i]
for j from 0 to word Length - 1:
if word[j] is not equal to s[j]:
Break the loop
if j is equals to words[i] length
Increment count by 1

- step 3: Return count

  
  

[1528. Shuffle String ](https://leetcode.com/problems/shuffle-string/description/)

You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

  

Return the shuffled string.

  

> ## pseudo code:-

  

- step 1: Initialize an empty string variable str

- step 2: Iterate over each index i in the range from 0 to the length of indices array - 1 for i from 0 to indices.length - 1:

- step 3: Iterate over each index j in the range from 0 to the length of indices array - 1
for `j` from 0 to indices.length - 1:

- step 4: If the value at index j in indices array is equal to i
if indices[j] is equal to `i`(i==indices[j]):
concatinate s[j] to str (str=str+s[j])
`break` the loop

- step 7: Return `str`

  
  

[1929. Concatenation of Array ](https://leetcode.com/problems/concatenation-of-array/description/)

  

write a pseudo code as take reference from above solution

  

Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

  

Specifically, ans is the concatenation of two nums arrays.

  

Return the array ans.

  
> ## pseudo code:-

  

- step 1: Initialize a variable length to the length of nums array

- step 2: Iterate over each index i in the range from 0 to length - 1
for i from 0 to length - 1:

- step 3: Assign nums[length + i] to nums[i]
nums[length + i] = nums[i]

- step 4: Return nums