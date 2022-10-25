// 7kyu- Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
    let numArray = []
    for(let i = 0; i <array.length-1; i++){
        numArray.push(array[i] * array[i+1])

    }

    return Math.max(...numArray)
}