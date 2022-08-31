// 7kyu- Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated 
function sortMyString(S) {
  let even = []
  let odd = []

  S.split('').map((word, index)=> index % 2 == 0 ? even.push(word) : odd.push(word))
  return even.join('') + " " + odd.join('')
}