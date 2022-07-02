// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode == correctCode && Date.parse(currentDate) <= Date.parse(expirationDate) ? true : false
  }
  
  console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))