// 7kyu- Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
function wordsToMarks(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let azValue = alphabet.split('').map((letter, i) => [letter, i+1])
    let newstring = string.split('')
    let result = []
    for(let i =0; i < newstring.length; i++){
        for(j =0; j< azValue.length; j++){
            if(azValue[j].includes(newstring[i])){
                result.push(azValue[j][1])
            }
        }
    }
    return result.reduce((a, c) => a+c)

}