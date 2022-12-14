// 6kyu - We have a big list having values fom 1 to n, occurring only once but unordered with an unknown amount of missing values. The number n will be considered the maximum value of the array.
function missNumsFinder(arr) {
    let missingNum = []
  
    for(let i =0; i<= Math.max(...arr); i++){
      if(!arr.includes(i) && i > 0){
        missingNum.push(i)
      }
    }
    return missingNum.sort((a,b)=> a -b)
  }