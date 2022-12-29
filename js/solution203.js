// 6kyu-A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base
function narcissistic(value) {
  // Code me to return true or false
  let sum = 0
  let num = value.toString()
  for(let i =0; i <num.length;i++){
    sum += Math.pow(num[i], num.length)
  }
  return sum == value
}