// 6kyu-In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
function dup(s){
  let result = []

  for(let i =0; i<s.length;i++){
    let word = []
    for(let j =0; j<s[i].length;j++){
     if(s[i][j] != s[i][j+1]){
      word.push(s[i][j])
     }
    }
    result.push(word.join(''))
  }
  return result
}