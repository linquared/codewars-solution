

// const body = document.querySelector('body')
// document.querySelector('#colorbtn').addEventListener('click', change)

// function change(){
//     let rbg1 = document.querySelector('#rgb1').innerText = `${Math.floor(Math.random()*255)},`
//     let rbg2 = document.querySelector('#rgb2').innerText = ` ${Math.floor(Math.random()*255)},`
//     let rbg3 = document.querySelector('#rgb3').innerText = ` ${Math.floor(Math.random()*255)}`
//     const rgbValue = `rgb(${rgb1.innerText}${rgb2.innerText}${rgb3.innerText})`

//     body.style.backgroundColor = rgbValue

// }





function meeting(s) {
    return s.toUpperCase().replace(/:/g,', ').split(';')
}

// console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))

function wave(str){
    let spaceStr = str + ', '
    let newStr = spaceStr.repeat(str.length).slice(0, -2).split(' ')
    let result = []

    for(let i = 0; i < newStr.length; i++){
        for(let j = 0; j< newStr[i].length; j++){
           if(newStr[i] +1 == newStr[i][j] +1){
            console.log('aye')
           }
        }
    }
    // return result
  }

// console.log(wave('codewars'))

function high(x){
    let s = x.split(' ').map(word => word.split(''))
    let z = s.map(words => words.charCodeAt())
}

// console.log(high('man i need a taxi up to ubud'))




function nextNumb(val) { 
   val % 3 == 0 && val % 2 != 0 && new Set(val.toString().split('')).size == val.toString().split('').length

  
    // let count = val
    // while( count != nextNumber)

    // count++
    // console.log(count)
    
    // return nextNumber; 
    // 
}

// console.log(nextNumb(14))

// their digits occur only once

// they are odd

// they are multiple of three


function solution(number){
  let multipleOf3and5 = []
  if(number <= 3){
    return 0
  } else {
    for(let i = 1; i < number; i++){
        if(i % 3 == 0 || i % 5 == 0){
        multipleOf3and5.push(i)
        }
    }
   
    return multipleOf3and5.reduce((a,c) => a+c)
    
}
}

console.log(solution(10))