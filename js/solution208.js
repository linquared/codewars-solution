function changer(str) { 
    if(str.length == 0){
      return ''
    }
    let vowel = 'aeiouAEIOU'
    let result = []
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i = 0; i< str.length;i++){
      if(!alphabet.includes(str[i])){
        result.push(str[i])
      }
      for(let j=0; j<alphabet.length;j++){
        if(str[i] == alphabet[j]){
          if(vowel.includes(alphabet[j+1])){
            result.push((alphabet[j+1]).toUpperCase())
          }else{
            result.push((alphabet[j+1]).toLocaleLowerCase())
          }
        }
        }
      }
    
    return result.join('')
  }
  