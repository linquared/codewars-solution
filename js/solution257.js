// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

function highestRank(arr) {
    let hash = {}
    let max = 0
    let num = 0

    for (const n of arr) {
        hash[n] = (hash[n] || 0) + 1
    }

    for (let key in hash) {
        if (hash[key] >= max) {
            max = hash[key]
            num = key
        }
    }
    return Number(num)
}