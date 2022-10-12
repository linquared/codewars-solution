// 6kyu- Encrypt this! You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
    // 1. Your message is a string containing space separated words.
    // 2. You need to encrypt each word in the message using the following rules:
    // 3.The first letter must be converted to its ASCII code.
    // 4. The second letter must be switched with the last letter

var encryptThis = function(text) {
        let reuslt = []
        let newText = text.split(' ')

        for(word of newText){
        let head = word.charCodeAt(0,1)
        let second = word[word.length-1]
        let end = word[1]
        if(end == undefined ? true : false){
            reuslt.push(head)
        }else if(word.length == 2){
            reuslt.push(head + second)
        }else{
            reuslt.push(head + second + word.slice(2, word.length-1) + end)
        }
    }

        return reuslt.join(' ')


}