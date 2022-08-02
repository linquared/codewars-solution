// 8kyu - Return the average of the given array rounded down to its nearest integer.
function getAverage(marks){
    return Math.floor(marks.reduce((a,c) => a + c)/ marks.length)
  }