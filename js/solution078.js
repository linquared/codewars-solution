// 7kyu- A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.


 function isNice(arr){
  let counter = 0
  for(let i = 0; i <arr.length; i++){
    if(arr.includes(arr[i]-1) || arr.includes(arr[i] + 1)) counter ++
  }
  if(counter == arr.length && arr.length != 0)return true
  return false
 }
