// 7kyu -Write a function which reveals "The ladies of ENIAC" names, so that you too can add them to your own hall of tech fame!
function radLadies(name) {
    let rename = name.split(' ')
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!'
    let fullName = []
    for (let i = 0; i < rename.length; i++) {
        let name = []
        for (j = 0; j < rename[i].length; j++) {
            if (alphabet.includes(rename[i][j])) {
                name.push(rename[i][j])
            }
        }
        fullName.push(name)
    }
    return fullName.map(name => name.join('')).join(' ').toUpperCase()
}
