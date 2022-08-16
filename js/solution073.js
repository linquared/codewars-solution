// 7kyu- Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
function maxTriSum(numbers){
   let newset = new Set(numbers)
   return Array.from(newset).sort((a,b) => b - a).slice(0,3).reduce((a,c) => a + c)
}

