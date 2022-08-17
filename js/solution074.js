// 7kyu - Write function which takes a string and make an acronym of it.
function toAcronym(inp){
    return inp.split(' ').map(word => word[0]).join('').toUpperCase()
}