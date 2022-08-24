// 7kyu- Given an array/list [] of integers , Find the Nth smallest element in this array of integers
function nthSmallest(arr, pos){
  arr.sort((a, b) => a - b)
  return arr[pos - 1]
}