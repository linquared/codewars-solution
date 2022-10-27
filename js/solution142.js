// 7kyu- We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
function vowelIndices(word){
    let vowel = ['a', 'e', 'i', 'o', 'u', 'y']
    let result = []
    let newWord = word.toLowerCase().split('').map((letter, i) => [letter, i+1])

    for(let i =0; i < newWord.length; i++){
        for(let j =0; j < vowel.length; j++){
            if(newWord[i].includes(vowel[j])){
                result.push(newWord[i])
            }
        }
    }

    return result.map(([letter, num]) => num)
}