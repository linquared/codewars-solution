// 7kyu - Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.
function minMinMax(array) {
  let min = Math.min(...array)
  let max= Math.max(...array)
  let minbetween = []
  for(let i = min; i< max; i++){
    if(!array.includes(i+1)){
      minbetween.push(i+1)
    }
  }
  minbetween = minbetween[0]
  let result = [min, minbetween, max]

  return result
}