// 7kyu-When provided with a String, capitalize all vowels
function swap (string) {
  let vowels = 'aeiouAEIOU'
  let newString = string.split('')
  let result = []
   newString.map(letter => vowels.includes(letter)? result.push(letter.toUpperCase()) : result.push(letter))
  return result.join('')
}