### introductions

> Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').



### Examples:

```javascript
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
```



### Solution

```js
//my
function solution(str) {
  let arr = [];
  if(str.length === 0) {
    return arr;
  } else if (str.length === 1) {
    return arr.push(str+'_');
  } else if (str.length%2 === 0) {
    for (let i=0; i<str.length; i+=2) {
      arr.push(str.slice(i, i+2===str.length?str.length+1:i+2));
    }
  } else if (str.length%2 !== 0) {
    for (let i=0; i<str.length-1; i+=2) {
      arr.push(str.slice(i, i+2));
    }
    arr.push(str[str.length-1]+'_');
  }
  return arr;
}
```



```js
//recommended

function solution(str) {
  let i = 0;
  let arr = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  
  while (i<str.length) {
    result.push(str[i] + str[i+1]);
    i+=2;
  }
  return result;
}
```



### full test suite

```js
You have passed all of the tests! :)
```

