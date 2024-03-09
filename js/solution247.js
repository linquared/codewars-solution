// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
    let word = text.toLowerCase()
    let hash = {}
    let arr = []

    for (let letter of word) {
        hash[letter] = (hash[letter] || 0) + 1
    }
    for (let key in hash) {
        if (hash[key] > 1) {
            arr.push(key)
        }
    }

    return arr.length
}
