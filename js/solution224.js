// use selection sort to sort the arrary from small to large number

const selectionSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
                let temp = arr[i]
                arr[i] = arr[lowest]
                arr[j] = temp
            }
        }
    }
    return arr

}


console.log(selectionSort([22, 50, 16, 9, 2]))