// 7kyu - Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.


function minimumSteps(numbers, value){
numbers.sort((a, b) => a - b)
for (let i = 0, sum =0; i < numbers.length; i++){
  sum += numbers[i]
  if(sum >= value){
    return i
  }
}
}