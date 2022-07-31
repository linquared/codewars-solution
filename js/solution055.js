// 7kyu - This time no story, no theory. The examples below show you how to write function accum:
function accum(s) {
    return s
    .toLowerCase()
    .split('')
    .map((let, index) => index == 0? let : let + let.padEnd(index, let))
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('-')
    
  }