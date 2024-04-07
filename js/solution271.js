// You'll have to translate a string to Pilot's alphabet(NATO phonetic alphabet).

// There is a preloaded dictionary that you can use, named NATO.It uses uppercase keys, e.g.NATO['A'] is "Alfa". 

function toNato(words) {
    let NATO = {
        'A': 'Alfa',
        'B': 'Bravo',
        'C': 'Charlie',
        'D': 'Delta',
        'E': 'Echo',
        'F': 'Foxtrot',
        'G': 'Golf',
        'H': 'Hotel',
        'I': 'India',
        'J': 'Juliett',
        'K': 'Kilo',
        'L': 'Lima',
        'M': 'Mike',
        'N': 'November',
        'O': 'Oscar',
        'P': 'Papa',
        'Q': 'Quebec',
        'R': 'Romeo',
        'S': 'Sierra',
        'T': 'Tango',
        'U': 'Uniform',
        'V': 'Victor',
        'W': 'Whiskey',
        'X': 'Xray',
        'Y': 'Yankee',
        'Z': 'Zulu',
    }
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

