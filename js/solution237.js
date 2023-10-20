// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times. Return the length of the longest substring containing the same letter you can get after performing the above operations.

const maxchar = (s, k) => {
    let [left, maxLen, topF] = [0, 0, 0]
    let freq = {}

    for (let right = 0; right < s.length; right++) {
        let char = s[right]

        freq[char] = (freq[char] || 0) + 1
        topF = Math.max(topF, freq[char])

        if (right - left + 1 - topF > k) {
            freq[s[left]]--
            left++
        }

        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
}