// find the index of the middle/inbetwen number

function findMid(array){
    const min = Math.min(...array)
    const max = Math.max(...array)
    return array.indexOf(array.find( num => num != min && num != max))
  }