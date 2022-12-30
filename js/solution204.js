// 6kyu-returns true, if every element in an array is an integer or a float with no decimals. returns true  if array is empty. everything else false
function isIntArray(arr) {
  if(arr == undefined){
    return false
  } else if (Array.isArray(arr) && arr.length ==0){
    return true
  }else {
    let count = 0
    for(let i = 0; i<arr.length;i++){
      if(Number.isInteger(arr[i])){
        count++
      }
    }
    
    return count == arr.length && count >0
  }
}