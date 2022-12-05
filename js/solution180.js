// 7kyu-You are given an odd-length array of integers, in which all of them are the same, except for one single number.

function stray(numbers) {
    let newNum = numbers.sort();
    return newNum[0] == newNum[1] ? newNum[newNum.length-1] : newNum[0]
  }
