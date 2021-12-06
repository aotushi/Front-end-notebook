### Introduction

> Write a function named `first_non_repeating_letter` that takes a string input, and returns the first character that is not repeated anywhere in the string.
>
> For example, if given the input `'stress'`, the function should return `'t'`, since the letter *t* only occurs once in the string, and occurs first in the string.
>
> As an added challenge, upper- and lowercase letters are considered the **same character**, but the function should return the correct case for the initial letter. For example, the input `'sTreSS'` should return `'T'`.
>
> If a string contains *all repeating characters*, it should return an empty string (`""`) or `None` -- see sample tests.



### Solutions

```javascript
//my
//数组中只有一个且第一次出现
function firstNonRepeatingLetter(s) {
  // Add your code here
  //return s.split('').filter((item, index) => s.plit('').indexOf(item, index + 1) === -1).join('')
    for (let [key,value] of s.split('').entries()) {
        //if (s.split('').indexOf(value, key + 1) === -1) return value;
        if (!s.split('').includes(value, index + 1)) return value;
    }
}

```



