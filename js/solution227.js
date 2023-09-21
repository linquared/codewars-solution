// Given an integer array nums and an integer k, return the k most frequent elements.You may return the answer in any order.

const two = (nums, target) => {
    let obj = {}
    let result = []

    for (let num of nums) {
        obj[num] ? obj[num]++ : obj[num] = 1
    }
    for (let num in obj) {
        result.push([num, obj[num]])
    }

    return result.sort((a, b) => b[1] - a[1]).map(([num]) => Number(num)).slice(0, target)

}


console.log(two([1], 1))

