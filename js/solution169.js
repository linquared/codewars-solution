// 8kyu -Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

function calculateTip(amount, rating) {
    let finalRating = rating.toLowerCase()
    
    if(finalRating == 'terrible'){
      return 0
    } else if(finalRating == 'poor'){
      return Math.round(amount * .05)
    }else if(finalRating == 'good'){
      return Math.round(amount * .10)
    } else if(finalRating == 'great'){
      return Math.round(amount * .15)
    } else if(finalRating == 'excellent'){
        return Math.round(amount * .2)
    }else {
        return "Rating not recognised"
    }
  }