// 7kyu- take an integer(n) and a digit(d), square all integers between 0 - n, and count all the digits that match 'd'
function nbDig(n, d) {
    let squares = []
    for(let i =0; i<= n; i++){
        if((i*i).toString().split('').includes(d.toString())){
            squares.push(i*i)
        }

    }
    return squares.toString().split('').filter(num => num == d.toString()).length

}