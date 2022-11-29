// 6kyu- Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed

function spinWords(string){
    let over5 = string.split(' ').filter(word => word.length >= 5).map(word => word.split('').reverse().join(''))
    return string.split(' ').map(word => word.length < 5 ? word : over5.shift()).join(' ')
  }
