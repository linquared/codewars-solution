// 8kyu- Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044
function  calculateAge(yearborn, endyear) {
  
    const age = endyear - yearborn 
    
    if(age == 1){
      return `You are ${age} year old.`
    } else if(age == 0){
      return "You were born this very year!"
    } else if(age < -1){
      return `You will be born in ${Math.abs(age)} years.`
    } else if(age == -1){
        return `You will be born in ${Math.abs(age)} year.`
    } else{
      return `You are ${age} years old.`
    }
  
  }