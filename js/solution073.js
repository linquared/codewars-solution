// 7kyu - Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
function minimumSteps(numbers, value){
    const nums = numbers.slice().sort((a,b) => a - b);
    for(let i = 0, sum = 0; i < nums.length; i++){
        sum += nums[i]
    }if(sum >= value){
        return i
    }
}

