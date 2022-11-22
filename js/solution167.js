// 7kyu-Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
function solve(s) {
    let newArray = []
    let newS = s.replace(/a|e|i|o|u/g, ' ').split(' ').filter(letter => letter.length > 0).map((letter) => letter.length == 1 ? newArray.push((letter.charCodeAt())- 96) : letter.split('')).filter(letter => typeof letter !='number')

    if(newS.length == 1){
        newArray.push([].concat(...newS).map(letter => letter.charCodeAt()-96).reduce((a,c)=> a+c)) 
    }else{
        for(let i = 0; i< newS.length; i++){
            let sum = 0
           for(let j = 0; j< newS[i].length; j++){
            sum += (newS[i][j]).charCodeAt()-96

           }
            newArray.push(sum)
        }
    }

    return Math.max(...newArray)

  };