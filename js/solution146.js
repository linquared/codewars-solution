// 6kyu- Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
function upArray(arr){
    let num = String(Number(arr.join(''))+1)
    return num == 'NaN' ? null : num.split('').map(num => num = Number(num))
    
  }