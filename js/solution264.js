// Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.
function moveVowel(input) {
    let nonV = ''
    let vowel = ''
    let v = 'aeiou'

    for (let i = 0; i < input.length; i++) {
        let letter = input[i]
        if (v.includes(letter)) {
            vowel += letter
        } else {
            nonV += letter
        }
    }

    return nonV + vowel
}