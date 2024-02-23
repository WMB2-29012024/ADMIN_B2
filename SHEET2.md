[1662. Check If Two String Arrays are Equivalent](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/)

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]

Output: true

> ## pseudo code:-

- step 1: create two variable wordcount1 and wordcount2 and initialize with blank (wordStr1="" and wordStr2="") string, then

- step 2: iterate over word1[] and concatenate every index word1[i] in wordStr1=wordStr1+word1[i]

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

[20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)

  

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  

An input string is valid if:

  

Open brackets must be closed by the same type of brackets.

Open brackets must be closed in the correct order.

Every close bracket has a corresponding open bracket of the same type.

  

>  ## pseudo code :-

  

- step 1: Initialize an empty stack.

  

- step 2: Iterate over each character `c` in the string `s` from left to right.
for each character c in s:

- step 3: Check the type of the current character.
switch (c):
   - case '(':
   - case '{':
   - case '[':
{
Push `c` onto the stack.
break;
}
   - case ')':
{
If the stack is empty or the top of the stack is not '(':
Return false.
break;
}
   - case '}':
{
If the stack is empty or the top of the stack is not '{':
Return false.
break;
}
  - case ']':
{
If the stack is empty or the top of the stack is not '[':
Return false.
break;
}

  

- step 4: After iterating through all characters, if the stack is not empty:
Return false.
- step 5: Return true.

[26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

Given an integer array  `nums`  sorted in  **non-decreasing order**, remove the duplicates  [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm)  such that each unique element appears only  **once**. The  **relative order**  of the elements should be kept the  **same**. Then return  _the number of unique elements in_ `nums`.

Consider the number of unique elements of  `nums`  to be  `k`, to get accepted, you need to do the following things:

-   Change the array  `nums`  such that the first  `k`  elements of  `nums`  contain the unique elements in the order they were present in  `nums`  initially. The remaining elements of  `nums`  are not important as well as the size of  `nums`.
-   Return  `k`.

**Custom Judge:**

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be  **accepted**.

> ## pseudocode

- step 1: If the length of the array nums is 0, return 0.

- step 2: Initialize a variable uniqueIndex to 1.

- step 3: Iterate over each index i in the range from 1 to the length of nums - 1.
for i from 1 to nums.length - 1:

    - step 4: Compare the element at index i with the element at index (i - 1).
    if nums[i] is not equal to nums[i - 1]:

     - step 5: Assign the element at index i to the element at index uniqueIndex in the nums array.
      - nums[uniqueIndex] = nums[i]

      - step 6: Increment the value of uniqueIndex by 1.
        uniqueIndex++

- step 7: Return the value of uniqueIndex.

[27. Remove Element](https://leetcode.com/problems/remove-element/)

Given an integer array  `nums`  and an integer  `val`, remove all occurrences of  `val`  in  `nums`  [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm). The order of the elements may be changed. Then return  _the number of elements in_ `nums` _which are not equal to_ `val`.

Consider the number of elements in  `nums`  which are not equal to  `val`  be  `k`, to get accepted, you need to do the following things:

-   Change the array  `nums`  such that the first  `k`  elements of  `nums`  contain the elements which are not equal to  `val`. The remaining elements of  `nums`  are not important as well as the size of  `nums`.
-   Return  `k`.
> ## pseudocode

- step 1: If the length of the array nums is 0, return 0.

- step 2: Initialize a variable k to 0. This variable will keep track of the next position to insert elements not equal to val.

- step 3: Iterate over each index i in the range from 0 to the length of nums - 1.
for i from 0 to nums.length - 1:

   - step 4: Check if the element at index i is not equal to val.
    if nums[i] is not equal to val:

    - step 5: Assign the element at index i to the element at index k in the nums array.
        nums[k] = nums[i]
     - step 6: Increment the value of k by 1.
        k++
- step 7: Return the value of k. This represents the count of elements in nums that are not equal to val.
