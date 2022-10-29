// 7kyu-You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
function getMiddle(s){
    let newstring = s.split('')
    if(newstring.length % 2 == 0){
        return `${newstring[newstring.length/2 - 1]}${newstring[newstring.length/2]}`
    } else {
        return newstring[Math.floor(newstring.length/2)]
    }
}