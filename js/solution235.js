// Best Time to Buy and Sell Stock - You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0.

const stock = (nums) => {
    let temp = 0
    let profit = 0

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            temp = nums[i] - nums[j]
            profit = Math.min(temp, profit)
        }
    }
    return Math.abs(profit)
}
