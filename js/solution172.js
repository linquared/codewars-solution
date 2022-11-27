// 7kyu-Write a function that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
function sortGiftCode(code){
    return code.split('').sort().join('')
}