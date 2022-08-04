// 7kyu - turn a given number into expanded form for ex: 403 => 400 + 3
function expandedForms(num){
  return num  
    .toString()
    .split('')
    .reverse()
    .map((num, i) => num * Math.pow(10,i))
    .filter(num => num > 0)
    .reverse()
    .join(' + ')
}