// 7kyu- Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. 
function solve(arr){  
    let newarr = arr.join(' ').toLowerCase().split(' ')
    let result = []
    for(let i =0; i< newarr.length; i++){
        let count = 0
        for(let j = 0; j< newarr[i].length; j++){
            if(j + 1 == newarr[i].charCodeAt(j)-96){

            count++
            }
        }
        result.push(count)

    }
    return result

};