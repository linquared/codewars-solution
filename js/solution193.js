// 7kyu-Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.
const prevMultOfThree = n => {
  let possibleResults = []
  let newN = n.toString()
  for(let i=0; i< newN.length; i++){
    if(newN.slice(0, i+1) % 3 == 0){
      possibleResults.push(newN.slice(0, i+1))
    }
  }

  return possibleResults.length == 0 ? null : Number(Math.max(...possibleResults))
}
