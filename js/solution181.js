// 7kyu-Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
function get_sum(a,b){
  if(a == b){
    return a
  }
  sum = 0
  for(i = Math.min(a, b); i<= Math.max(a, b); i++){
    sum += i
  } 
  return sum
}