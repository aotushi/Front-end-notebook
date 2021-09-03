function averageArr(arr, size) {
  if (size === 0 || size === 1 || arr.length <= 1) {
    return arr;
  } else {
    // 数组长度大于等于2; size大于等于2;  size合理范围是小于等于arr.length, size如果大于arr.length则报错
    if (size > arr.length) {
      return '数组长度小于size, 不能被等分'
    } else {
      let receiveArr = [];
      let n = 0;

      if (arr.length === size) {
        // 数组可以被等分
        for (let i = 0; i < (arr.length/size); i++) {
          receiveArr[n] = arr.slice(size * i, size * (i + 1));
          n++;
        }
        return receiveArr;
      } else {
        // 数组不可以被等分(数组长度大于size)
        for (let i = 0; i < ((arr.length - (arr.length % size)) / size); i++) {
          receiveArr[n] = arr.slice(size * i, size * (i + 1));
          n++;
        }
        receiveArr[n] = arr.slice((arr.length - (arr.length % size)), arr.length);
        return receiveArr;
      }
    }
  }
}

averageArr([1, 2, 3, 4, 5, 6], 4);