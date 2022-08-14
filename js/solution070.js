// 7kyu Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
function min(arr, toReturn) {
    return toReturn == 'index' ? arr.indexOf(Math.min(...arr)) : Math.min(...arr)
  }