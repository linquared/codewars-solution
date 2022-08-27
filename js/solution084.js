// 7kyu - Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
function flatten(arr){
  return [].concat(...arr).sort((a, b) => a - b)
}