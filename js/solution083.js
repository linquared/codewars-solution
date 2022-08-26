// 7kyu- You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
function smallEnough(a, limit){
  let falseVal = []
  a.map(num => num <= limit ? num : falseVal.push(num))
  return falseVal.length > 0 ? false : true
  
}