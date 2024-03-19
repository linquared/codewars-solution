// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    let zero = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero.push(arr[i])
            arr.splice(i, 1)
            i--
        }
    }
    return arr.concat(...zero)

}