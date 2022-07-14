// Create a function with two arguments that will return an array of the first (n) multiples of (x).

function countBy(x, n) {
    let z = [];
  
      for(let i = x; i <= (x * n); i+=x ){
        z.push(i)
      }
    return z;
  }
  
  
  