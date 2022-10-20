// 6kyu- In this kata you are required to, given a string, replace every letter with its position in the alphabet.
function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let azValue = alphabet.split('').map((letter, i) => [letter, i+1])
    let result = []
    let newText = text.toLowerCase()
    for(let i =0; i < newText.length; i++){
        for(j =0; j< azValue.length; j++){
            if(azValue[j].includes(newText[i])){
                result.push(azValue[j][1])
            }
        }
    }

    return result.join(' ')
}