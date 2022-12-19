// 7kyu-Write a function which takes a list of strings and returns each line prepended by the correct number. The numbering starts at 1. The format is n: string. Notice the colon and space in between.
var number=function(array){
  if(array.length== 0){
    return []
  }
  return array.map((el, i) => `${i+1}: ${el}`)
}
