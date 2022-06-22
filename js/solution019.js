//8KYU Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
function removeEveryOther(arr){
   return arr.filter((word, index) => index % 2 == 0)
}


// Your task is to write a function that takes a string and return a new string with all vowels removed.
function disemvowel(str) {
    
    return str  
        .replace(/a|A|E|e|i|I|O|o|u|U/g, '')
               
  }

  console.log(disemvowel("This website is for losers LOL!"))