// 7kyu
function reverseLetter(str) {
    return str  
      .split('')
      .reverse()
      .filter(letter => /[a-zA-Z]/.test(letter))
      .join('')
  }