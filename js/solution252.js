// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

function solution(roman) {
    let nums = {
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        "I": 1,
    }
    let sum = 0

    for (let i = 0; i < roman.length; i++) {
        let current = nums[roman[i]]
        let next = nums[roman[i + 1]]

        if (next > current) {
            sum -= current
        } else {
            sum += current
        }
    }

    return sum
}
