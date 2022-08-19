// 6kyu - An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.
function oddHeavy(arr){
   let odd = []
   let even = []
   arr.forEach(num => num % 2 == 0 ? even.push(num) : odd.push(num))
   if(odd.length > 0){
      return Math.min(...odd) > Math.max(...even) 
   }return false
}

