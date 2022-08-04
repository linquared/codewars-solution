// 7kyu In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". find the complements
function DNAStrand(dna){
  return dna  
    .split('')
    .map(letter => letter == 'A' ? 'T' : letter == 'T' ? 'A' : letter == 'C' ? 'G' : letter == 'G' ? 'C' :'')
    .join('')
}