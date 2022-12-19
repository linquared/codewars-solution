// 7kyu-Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
function maxGap (numbers){
  let diffNums = []

  let sortedNums = numbers.sort((a,b) => b-a)
    for(let i =0; i<sortedNums.length;i++){
      diffNums.push(sortedNums[i] - sortedNums[i+1])
    }
  diffNums = diffNums.slice(0, diffNums.length-1)
  return Math.max(...diffNums)
}
