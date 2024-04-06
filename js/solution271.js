// You'll have to translate a string to Pilot's alphabet(NATO phonetic alphabet).

// There is a preloaded dictionary that you can use, named NATO.It uses uppercase keys, e.g.NATO['A'] is "Alfa". 

function toNato(words) {

    let result = []

    for (let l of words) {
        let letter = l.toUpperCase()
        if (NATO[letter]) {
            result.push(NATO[letter])
        } else if (letter === ',' || letter === '!' || letter === '.' || letter === '?') {
            result.push(letter)
        }
    }

    return result.join(' ')

}