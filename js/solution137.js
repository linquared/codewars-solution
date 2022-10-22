// 7kyu- Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
function sumOfMinimums(arr) {

    let min = []
    for(let i = 0; i < arr.length; i++){
        min.push(Math.min(...arr[i]))
    }
    return min.reduce((a,c) => a + c)
}