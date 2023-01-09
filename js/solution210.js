// 7kyu-Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).
function countConsonants(str) {
  let set = new Set
  let consonants = 'bcdfghjklmnpqrstvwxyz'
  let newstring = str.toLowerCase().split('')
  let count = 0
  newstring.forEach(letter => set.add(letter))
  set = [...set]
  for(let i =0; i<set.length;i++){
    for(let j =0; j<set[i].length;j++){
      if(consonants.includes(set[i][j])){
        count++
      }
    }
  }
  return count
}