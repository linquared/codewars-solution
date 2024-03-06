// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
// also implement a descryption funtion

function encrypt(text, n) {
    if (!text || n <= 0) return text

    for (let i = 0; i < n; i++) {
        let odd = ""
        let even = ""

        for (let i = 0; i < text.length; i++) {
            if (i % 2 !== 0) {
                odd += text[i]
            } else {
                even += text[i]
            }
        }

        text = odd + even
    }

    return text

}

function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText

    for (let i = 0; i < n; i++) {

        let odd = encryptedText.slice(0, Math.floor(encryptedText.length / 2))
        let even = encryptedText.slice(Math.floor(encryptedText.length / 2), encryptedText.length)

        let result = ''
        for (let j = 0; j < Math.max(odd.length, even.length); j++) {
            if (j < even.length) result += even[j]
            if (j < odd.length) result += odd[j]
        }
        encryptedText = result
    }

    return encryptedText
}

