// 8kyu- Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
   let newstr = str.split('')
    let repeated = []
   for(let i = 0; i < newstr.length; i++){
       
            repeated.push(newstr[i].repeat(2))
        
   }
   return repeated.join('')
  }
