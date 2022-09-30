// 7kyu- Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
function capitalize(s){
    let Capfirst = s.split('').map((let, i) => i % 2 ==0 ? let.toUpperCase() : let.toLowerCase()).join('')
    let lowerfirst = s.split('').map((let, i) => i % 2 ==0 ? let.toLowerCase() : let.toUpperCase()).join('')
        return [ Capfirst, lowerfirst];

};

