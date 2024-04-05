// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str) {
    let words = str.split(' ')
    let result = ''

    for (let i = 0; i < words.length; i++) {
        let reverse = ''
        if (i % 2 !== 0) {
            for (let j = words[i].length - 1; j >= 0; j--) {
                reverse += words[i][j]
            }
            result += reverse + ' '
        } else {
            result += words[i] + ' '
        }

    }
    return result.trim()
}
