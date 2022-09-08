// 8kyu - Coding in function blackAndWhite. function accept 1 parameter arr(a number array).
function blackAndWhite(arr){
    // return Array.isArray(arr) ? arr. : "It's a fake array"   
    if(Array.isArray(arr) == true && arr.includes(5) && arr.includes(13)){
        return "It's a black array"
    }else if(Array.isArray(arr) == false){
        return "It's a fake array"
    }else{
        return "It's a white array"
    }
  }

