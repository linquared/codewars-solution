// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
function scramble(str1, str2) {
    if (str2.length > str1.length) return false

    let obj = {}

    for (let l of str1) {
        obj[l] = (obj[l] || 0) + 1
    }

    for (let l of str2) {
        if (obj[l]) {
            obj[l]--
        } else {
            return false
        }
    }
    return true
}