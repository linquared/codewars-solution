// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0 - 9 in any of the spots will produce a valid phone number.

function validPhoneNumber(phoneNumber) {
    if (phoneNumber.length !== 14) return false
    let s = {
        '(': 0,
        ')': 4,
        ' ': 5,
        '-': 9,
    }
    let count = 0

    for (let i = 0; i < phoneNumber.length; i++) {
        let char = phoneNumber[i]
        if (s[char] === i) {
            count++
        }
    }
    return count === 4
}
