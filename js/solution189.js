// 6kyu- he goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
function duplicateEncode(word){
  let result = []
  let lowerCase = word.toLowerCase()
  for(let i = 0; i < lowerCase.length; i++){
   if(lowerCase.replace(lowerCase[i], '').slice().includes(lowerCase[i])){
    result.push(')')
   }else {
    result.push('(')
   }
}
  return result.join('')
  
}
