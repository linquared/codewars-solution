// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

const palindrome = (strs) => {
    let newstr = strs.toLowerCase().replace(/[^a-z0-9]/gi, '')

    for (let i = 0, j = newstr.length - 1; i <= j; i++, j--) {
        if (newstr[i] !== newstr[j]) {
            return false
        }
    }

    return true
}