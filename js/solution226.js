// contains duplicates -Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// option 1
const dup = (arr) => {
    let obj = {}

    for (let num of arr) {
        obj[num] ? obj[num]++ : obj[num] = 1
    }

    for (const num in obj) {
        if (obj[num] > 1) {
            return true
        }
    }

    return false
}

// option 2
const dupp = (arr) => {
    let newArr = arr.sort((a, b) => a - b)

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === newArr[i + 1]) {
            return true
        }
    }
    return false
}

// option 3 
const duppp = (arr) => {
    return new Set(arr).size === arr.length ? false : true

}