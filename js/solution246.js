// Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let hash = {}

    for (let num of A) {
        hash[num] = (hash[num] || 0) + 1
    }

    for (let key in hash) {
        if (hash[key] % 2 !== 0) {
            return Number(key)
        }
    }
}
