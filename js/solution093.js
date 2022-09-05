// DESCRIPTION: Write a simple parser that will parse and run Deadfish.
function parse(data){
    let result = [];
    data.split('').reduce((a, c)=> {
        if( c == 'i'){
            a++
        }if( c == 'd'){
            a--
        }if(c == 's'){
            a = Math.pow(a, 2)
        }if(c == 'o'){
            result.push(a)
        }
        return a
    }, 0)
    return result
}

console.log(parse("iiisdoso"))