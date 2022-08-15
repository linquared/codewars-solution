// 7kyu - Given an array/list [] of integers , Find the product of the k maximal numbers.
function maxProduct(numbers, size){
    numbers.sort((a,b) => b - a)
    let newNum = []
    for(i = 0; i < size; i++){
       newNum.push(numbers[i])
    }
    return newNum.reduce((a,b) => a * b)
    
}