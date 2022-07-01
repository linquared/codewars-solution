// 7kyu Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
function minValue(values){
    return +(values
      .filter((num, index) => values.indexOf(num) == index)
      .sort((a, b) => a - b)
      .join(''))
  }
  
  // 2nd method
  
  function minValue(values){
    newNum = [... new Set (values)];
    return +newNum 
      .sort((a, b) => a - b)
      .join('')
  }
  