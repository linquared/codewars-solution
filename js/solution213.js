// 7kyu-Create a function which accepts one arbitrary string as an argument, and return a string of length 26.
function change(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let result = []
    for (let i = 0; i < alphabet.length; i++) {
        if (string.toLowerCase().includes(alphabet[i])) {
            result.push('1')
        } else {
            result.push('0')
        }
    }
    return result.join('')
}