
// 7kyu - In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
  return `${Math.max(...(numbers.split(' ')))} ${Math.min(...(numbers.split(' ')))}`
}

