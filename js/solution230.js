// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

const longest = (nums) => {

    let sorted = nums.sort((a, b) => a - b)
    let count = 0
    let tempCount = 1

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] + 1 === sorted[i + 1]) {
            tempCount++
            count = Math.max(tempCount, count)
        } else if (sorted[i] === sorted[i + 1]) {
            count = Math.max(tempCount, count)
        } else {
            tempCount = 1
            count = Math.max(tempCount, count)
        }

    }

    return count

}