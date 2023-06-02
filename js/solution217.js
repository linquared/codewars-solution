// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.use that ex
function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    let obj = {}

    for (let letter of str1) {
        obj[letter] ? obj[letter]++ : obj[letter] = 1
    }

    for (let letter of str2) {
        if (obj[letter]) {
            obj[letter]--
        } else {
            return false
        }
    }
    return true
}