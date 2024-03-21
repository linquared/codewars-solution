// Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

function validate(num) {
    // length
    let evenOrOdd = num.toString()

    // after double
    let nums = []

    // step 1: double num
    for (let i = 0; i < evenOrOdd.length; i++) {
        if (evenOrOdd.length % 2 === 0) {
            if (i % 2 === 0) {
                nums.push(evenOrOdd[i] * 2)
            } else {
                nums.push(evenOrOdd[i])
            }
        } else {
            if (i % 2 !== 0) {
                nums.push(evenOrOdd[i] * 2)
            } else {
                nums.push(evenOrOdd[i])
            }
        }
    }
    // step 2
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 9) {
            nums[i] = nums[i] - 9
        }
    }

    return nums.reduce((a, c) => Number(a) + Number(c), 0) % 10 === 0
}
