// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit .
function findMultiples(integer, limit) {
    let multiple = []
    for (let i = integer; i <= limit; i += integer){
      multiple.push(i)
    }
    return multiple
  }