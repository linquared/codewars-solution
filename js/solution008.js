function getCount(str) {
   return str
    .split('')
    .filter(word => word.includes('a') || word.includes('e') || word.includes('i') || word.includes('o') || word.includes('u')).length
}
