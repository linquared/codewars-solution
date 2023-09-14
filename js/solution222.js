// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
// EXAMPLE: Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

function mergewords(word1, word2) {
    if (word1 + word2 !== word2 + word1) return ''

    function gcd(x, y) {
        if (!y) return x

        return gcd(y, x % y)
    }

    return gcd(word1, word2)
}

console.log(mergewords('ABCABCABC', 'ABC'))
