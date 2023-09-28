// 3 sums -Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. 


const threesums = (nums) => {
    let result = []
    let obj = {}

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let diff = 0 - (nums[i] + nums[j])
            if (nums.includes(diff)) {
                if (nums.indexOf(diff) !== i & nums.indexOf(diff) !== j) {
                    let triplet = [diff, nums[i], nums[j]].sort((a, b) => a - b)
                    let key = triplet.join('')

                    if (!obj[key]) {
                        result.push(triplet)
                        obj[key] = true
                    }

                }
            }

        }

    }

    return result
}