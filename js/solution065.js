
// 7kyu Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

function sortByValueAndIndex(array){
  return array.map((num, i) => [num, i + 1]).sort((a, b) => (a[0] * a[1]) - (b[0] * b[1])).map(([num]) => num)
}
