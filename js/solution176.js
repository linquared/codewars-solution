// 7kyu- Make a function that receives a value, val and outputs the smallest higher number than the given value, and this number belong to a set of positive integers that have the following properties: // 1. their digits occur only once. 2. they are odd. 3. they are multiple of three

function nextNumb(val) { 
    if(val == 9999999999){
        return "There is no\
     possible number that fulfills those requirements"
      }
    for(let i =val+1; i< Infinity; i++){
        if(i % 3 == 0 && i % 2 != 0 && new Set(i.toString().split('')).size == i.toString().split('').length){
            return i
        }
    }
}

