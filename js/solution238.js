// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t(including duplicates) is included in the window.If there is no such substring, return the empty string "".

const minwindow = (s, t) => {
    if (s.length < t.length) return ''

    let left = 0
    let tHash = {}

    for (let letter of t) {
        tHash[letter] = (tHash[letter] || 0) + 1
    }
    let needCount = Object.keys(tHash).length


    let haveTable = {}
    for (const key of Object.keys(tHash)) {
        haveTable[key] = 0
    }

    let haveCount = 0

    let minLen = Infinity
    let pairs = ''


    for (let right = 0; right < s.length; right++) {
        let char = s[right]
        if (tHash[char]) {
            haveTable[char] += 1
            if (tHash[char] === haveTable[char]) {
                haveCount++
            }
        }
        while (haveCount === needCount) {
            if (right - left + 1 < minLen) {
                minLen = Math.min(minLen, right - left + 1)
                pairs = s.slice(left, right + 1)
            }
            let leftchar = s[left]
            haveTable[leftchar]--
            if (haveTable[leftchar] < tHash[leftchar]) {
                haveCount--
            }
            left++
        }
    }
    return pairs
}
