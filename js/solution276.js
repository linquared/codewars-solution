// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

function validateWord(s) {
    let obj = {}

    for (const n of s) {
        obj[n.toLowerCase()] = (obj[n.toLowerCase()] || 0) + 1
    }

    for (let i = 0; i < Object.values(obj).length; i++) {
        let val = Object.values(obj)

        if (val[i + 1] !== undefined && val[i] !== val[i + 1]) {
            return false
        }
    }
    return true

}
