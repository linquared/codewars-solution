// 7kyu-Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.
function arrayMash (array1, array2) {
  let result = []

  for (let i =0; i< array1.length; i++){
    for(let j =0; j< array2.length; j++){
     if(i ==j){
      result.push(array1[i], array2[j])
     }
    }
  }

  return result
}