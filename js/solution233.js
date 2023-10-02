// two sums part II- Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one 

const twoSumAgaing = (nums, target) => {
    let result = []

    let left = 0
    let right = nums.length - 1

    while (nums[right] + nums[left] !== target) {
        if (nums[right] + nums[left] > target) {
            right--
        } else {
            left++
        }
    }
    return [left + 1, right + 1]
}