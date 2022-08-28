// 7kyu Given a Divisor and a Bound , Find the largest integer N , Such That ,
function maxMultiple(divisor, bound){
  let divisible = []
  for(let i = 0; i <= bound; i+= divisor){
    divisible.push(i)
  }
  return divisible[divisible.length-1]
}