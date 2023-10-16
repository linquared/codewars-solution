// giving an array of integers representing heights. you want to find two lines that create the largest possible rectangular container. Your job is to figure out which two lines to choose to maximize the size of this container. hint using 2 pts method

const two = (nums) => {
    let left = 0
    let right = nums.length - 1
    let temp = 0
    let area = Math.min(nums[left], nums[right]) * (right - left)

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[left] < nums[right]) {
            left++
            temp = Math.min(nums[left], nums[right]) * (right - left)
            area = Math.max(temp, area)
        } else {
            right--
            temp = Math.min(nums[left], nums[right]) * (right - left)
            area = Math.max(temp, area)
        }
    }

    return area
}
