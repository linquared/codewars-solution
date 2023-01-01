// 6kyu-An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long. Your task is to return the number of zero sequences if the given array is zero-plentiful, oherwise 0.
function zeroPlentiful(arr){
  let count = 0
  let zeros = []
  for(let i =0; i<= arr.length;i++){
    if(arr[i] == 0){
      count++
    }else if(arr[i] !=0){
      zeros.push(count)
      count = 0
    }else if (i == arr.length){
      zeros.push(count)
    }
  }
  return zeros.filter(num => num >=4).length
}