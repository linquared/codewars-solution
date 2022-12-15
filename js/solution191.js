// 7kyu-Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str){
  let xCount = 0
  let oCount = 0

  for(let i =0; i< str.length; i++){
    if(str[i].toLowerCase() == 'o'){
      oCount++
    }else if(str[i].toLowerCase() == 'x'){
      xCount++
    }
  }
  return xCount == oCount

}