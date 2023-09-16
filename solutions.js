

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
  return s.toUpperCase().replace(/:/g, ', ').split(';')
}

// console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))

function wave(str) {
  let spaceStr = str + ', '
  let newStr = spaceStr.repeat(str.length).slice(0, -2).split(' ')
  let result = []

  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < newStr[i].length; j++) {
      if (newStr[i] + 1 == newStr[i][j] + 1) {
        console.log('aye')
      }
    }
  }
  // return result
}

// console.log(wave('codewars'))

function high(x) {
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


function solution(number) {
  let multipleOf3and5 = []
  if (number <= 3) {
    return 0
  } else {
    for (let i = 1; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        multipleOf3and5.push(i)
      }
    }

    return multipleOf3and5.reduce((a, c) => a + c)

  }
}
function compare(array) {
  // acc = starts as one of our arrays
  // loop through array of arrays
  // compare current array with our acc
  // for each element in current
  // if that element exisist in acc 
  // push that element into a new array

  // acc reassigned to new array
  // return our acc
  let result = []
  let acc = array[0]
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (acc.includes(array[i][j])) {
        result.push(array[i][j])
        acc = result
      }

    }
  }

  // return result
}


const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
// console.log(compare([arr1, arr2, arr3])); // should log: [5, 15]

function userGreeting(str1, str2) {
  return `Hi ${str1} ${str2}! What  a beautiful day`
}

// console.log(userGreeting('Kwaku', 'Adu'))
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    let product = target - nums[i]
    let otherProduct = target - product
    if (nums.includes(product) && nums.includes(otherProduct)) {
      result.push(product, otherProduct)
    }

  }

  return result

};

// console.log(twoSum([3, 4, 2], 6))

function maxLetters(string) {
  const max = string.length
  const expression = '. , ? !'
  let returnIndex = []
  if (max > 350) {
    const newsec = string.slice(0, 350)
    // const period = newsec.lastIndexOf('.')
    // const coma = newsec.lastIndexOf(',')
    // const question = newsec.lastIndexOf('?')
    // const important = newsec.lastIndexOf('!')


  }
  return returnIndex
  // return string
}

// console.log(maxLetters("If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph.We created the Random Paragraph Generator with you in mind.The process is quite simple.Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear. While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs."))

function sort(str) {
  let result = []
  let newstr = str.split(' ')

  for (let i = 0; i < newstr.length; i++) {
    for (let j = 0; j < newstr[i].length; j++) {
      if (Number(newstr[i][j])) {
        result[newstr[i][j] - 1] = newstr[i]
      }
    }

  }
  return result
}

// console.log(sort('test4 is2 a3 this1'))

// let isValid = (s) => {
//   let newArr = s.split("")
//   let bracketChecker = []
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] === "{") {
//       bracketChecker.push('}')
//     }
//     else if (newArr[i] === "[") {
//       bracketChecker.push(']')
//     }
//     else if (newArr[i] === "(") {
//       bracketChecker.push(')')
//     }
//     else if (bracketChecker.pop() !== newArr[i]) {
//       return false;
//     }
//   }

//   return !bracketChecker.length;
// }


// solution 223

// There are n kids with candies.You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.



var kidsWithCandies = function (candies, extraCandies) {
  let result = []
  let maxCandies = Math.max(...candies)

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      result.push(true)
    } else {
      result.push(false)
    }
  }

  return result
};


const selectionSort = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
        let temp = arr[i]
        arr[i] = arr[lowest]
        arr[j] = temp
      }
      // console.log(arr[i], arr[j])
    }
  }
  return arr

}


console.log(selectionSort([22, 50, 16, 9, 2]))