// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
//    let order = arr.sort((a,b) => a - b)
//    return [order[0], order.length]
    return [Math.min(...arr), Math.max(...arr)]
}

