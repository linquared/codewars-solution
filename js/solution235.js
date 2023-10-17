// Best Time to Buy and Sell Stock - You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0.
const stock = (nums) => {
    let profit = 0
    let left = 0
    let right = 1

    while (right < nums.length) {

        if (nums[left] < nums[right]) {
            let currentProfit = nums[right] - nums[left]
            profit = Math.max(currentProfit, profit)
        } else {
            left = right
        }
        right++

    }
    return profit
}
