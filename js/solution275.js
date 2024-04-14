// Digital Cypher assigns to each letter of the alphabet unique number. For example:
// Instead of letters in encrypted word we write the corresponding order in the alphabet.
// Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939


function encode(str, n) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let num = n.toString().split('')
    let result = []

    for (let i = 0; i < str.length; i++) {
        let key = num[i % num.length]
        result.push(alpha.indexOf(str[i]) + 1 + Number(key))

    }
    return result
}
