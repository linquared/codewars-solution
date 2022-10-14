// 6kyu- As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. 
function tribonacci(signature,n){

    for(let i = 0; signature.length < n; i++){
            signature.push(signature[signature.length-1] + signature[signature.length-2] + signature[signature.length-3])
        
    }

    if(n == 0){
        return []
    }else if(n < 3) {
        return [signature[0]]
    } else {
        return signature
    }
}