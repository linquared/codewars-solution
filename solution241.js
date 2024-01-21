// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or - 1 if it is not in nums.

function isValid(nums, target) {
    let left = 0
    let end = nums.length - 1

    while (left <= end) {
        let mid = Math.floor((end + left) / 2)

        if (nums[mid] === target) { return mid }

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                end = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (nums[mid] < target && target <= nums[end]) {
                left = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    return -1
}