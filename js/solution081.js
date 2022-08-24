// 7kyu - You are to write an function that takes a string as it's first paramter. This string will be a string of words.

function modifyMultiply (str,loc,num) {
  let word = (str.split(' ')[loc] + ' ').repeat(num).split(' ')
  return word.slice(0, word.length -1).join('-')
  
} 