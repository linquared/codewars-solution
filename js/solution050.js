// 8kyu String -If the text or the character are empty, return an empty string. There will never be a case when both are empty as nothing is going on!!
function contamination(text, char){
    if(text == ''|| char == ''){
      return ''
    }else{
      return char.padEnd(text.length, char)
    }
  }
  