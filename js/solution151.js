// 8kyu-Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
function spEng(sentence){
    let english = sentence.toLowerCase()
    return english.includes('english')
}