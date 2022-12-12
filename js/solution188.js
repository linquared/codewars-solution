// 7kyu-Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
function sumTwoSmallestNumbers(numbers) {  
  let sorted = numbers.sort((a, b)=> a - b)
  return sorted[0] + sorted[1]
}