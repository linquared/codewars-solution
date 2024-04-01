// Finish the solution so that it takes an input n(integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

function groupByCommas(n) {
    let nums = n.toString().split('').reverse()
    let result = []

    for (let i = 0; i < nums.length; i++) {
        if (i !== 0 && i % 3 == 0) {
            result.push(',')
        }
        result.push(nums[i])
    }
    return result.reverse().join('')

}