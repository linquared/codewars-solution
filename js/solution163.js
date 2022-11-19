// 7kyu- Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
var capitals = function (word) {
    let result = []
    word.split('').map((letter, i) => letter == letter.toUpperCase() ? result.push(i) : letter)
    return result
};