// 7kyu-you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.
function solve(arr){
  for(let i =0; i< arr.length;i++){
    if(!arr.includes(-Math.abs(arr[i])) || !arr.includes(Math.abs(arr[i])) ){
      return(arr[i])
    }
  }
};