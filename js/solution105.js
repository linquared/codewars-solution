// 7kyu-You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. 
function printerError(s) {
    let correct = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
    let news = s.split('')
    count = 0
    for(let i =0; i <news.length; i++){
        if(correct.includes(news[i]) == false){
            count++
        }
    }
    return `${count}/${s.length}`
}

