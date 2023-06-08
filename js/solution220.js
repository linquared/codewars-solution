// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(num) {

    if (num.length === 0) {
        return 1
    }

    return num[0] * productOfArray(num.slice(1))


}