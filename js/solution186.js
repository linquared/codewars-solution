// 7kyu-Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
function mostFrequentItemCount(collection) {
  if(collection.length == 0){
    return 0
  }
  const sortedCollection = collection.sort()
  let count = 0
  let duplicateCounts = []

  for(let i = 0; i< sortedCollection.length; i++){
    if(sortedCollection[i] == sortedCollection[i+1]){
      count++
    }else{
      duplicateCounts.push(count)
      count=0
    }
  }
  
  return Math.max(...(duplicateCounts.map(num => num +1)))
}