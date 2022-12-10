// Write a function mergingTripletsAndQuints which takes in two arrays as arguments. This function will return a new array replacing the elements in array1 if they are divisible by 3 or 5. The number should be replaced with the sum of itself added to the element at the corresponding index in array2.
function mergingTripletsAndQuints(array1, array2) {
  // ADD CODE HERE
  let result = []
  for(let i = 0; i < array1.length; i++){
    if(array1[i] % 5 != 0 && array1[i] % 3 !=0){
      result.push(array1[i])
    }
    for(let j= 0; j<array2.length; j++){
      if(array1[i] % 5 == 0 || array1[i] % 3 ==0){
        if(i == j){
        result.push(array1[i] + array2[j])
          }
        }
    }
  }
  return result
 }