// 8kyu-Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
function pipeFix(numbers){
    let newnum = []
    for(let i = Math.min(...numbers); i <= Math.max(...numbers); i++){
        newnum.push(i)
    }
    return newnum
}