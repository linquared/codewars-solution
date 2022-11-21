function generateShape(integer){
    let symbol = '+'
    let row = '\n' + symbol.repeat(integer) 
    return symbol.repeat(integer) + row.repeat(integer-1)

}