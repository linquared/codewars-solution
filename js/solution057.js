// 7kyu - Given a sequence of numbers, find the largest pair sum in the sequence.
function largestPairSum (numbers) {
    const newNum = numbers.sort((a,b) => b - a)
    return newNum[0] + newNum[1]
  }
  