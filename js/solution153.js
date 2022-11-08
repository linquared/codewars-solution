// 8kyu-Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
function countPositivesSumNegatives(input){
    let count = 0
    let sum = []

    if(input == ''|| input == null){
        return []
    }else{
        for(let i =0; i <input.length; i++){
            if(input[i] > 0){
                count++
            }else if(input[i] < 0){
                sum.push(input[i])
    
            }
        }
        return [count, sum.reduce((a, b)=> a+b)]
    }
}