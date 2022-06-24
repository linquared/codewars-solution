// 7kyu Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

function removeSmallest(numbers) {
    let minNum= numbers.splice(numbers.indexOf(Math.min(...numbers)), 1)
    return numbers
 }
 