
// 7kyu--Given a string made up of letters a, b, and/or c, switch the position of letters
function switcheroo(x){
    let result = []
    for(let i =0; i < x.length; i++){
        if(x[i] == 'a'){
            result.push('b')
        }else if(x[i] == 'b'){
            result.push('a')
        }else {
            result.push(x[i])
        }
    }
    return result.join('')
}