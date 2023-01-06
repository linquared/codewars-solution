// 7kyu-Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.
function consonantCount(str) {
  let count = 0
  let consonant = 'bcdfghjklmnpqrstvwxyz'
  for(let i =0; i< str.length; i++){
    if(consonant.includes(str[i].toLowerCase())){
      count++
    }
  }
  return count
}