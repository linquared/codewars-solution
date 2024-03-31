// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper - and lowercase letters are considered the same character, but the function should return the correct case for the initial letter.For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string("");

function firstNonRepeatingLetter(s) {
    let char = {}
    let result = ''
    for (const l of s) {
        char[l.toLowerCase()] = (char[l.toLowerCase()] || 0) + 1
    }

    if (Object.values(char).indexOf(1) === -1) return ''

    for (let i = 0; i < s.length; i++) {
        let letter = s[i]
        if (char[letter.toLowerCase()] === 1) {
            result += letter
            break
        }
    }
    return result
}