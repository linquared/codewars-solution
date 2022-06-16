// Write a function that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x){
    return (x
        .toLowerCase()
        .split('')
        .reverse()
        .join('')) == x.toLowerCase() ? true : false
    
 
        
}

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
function validatePIN (pin) {
  
    const arr = pin.split('').map( x => Number.parseInt(x) );
    
    if (arr.includes(NaN) || ( arr.length !== 4 && arr.length !== 6 ) ) return false
    
    return true
    
  }