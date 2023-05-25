// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. using 2 pointer method with example [1,2,3,4,4,4,7,7,12,12,13],

function countUniqueValues(arr) {
    // add whatever parameters you deem necessary - good luck!
    let start = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[start] !== arr[i]) {
            start++
            arr[start] = arr[i]
        }
    }
    return start + 1
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))