// Given a lottery ticket(ticket), represented by an array of 2 - value arrays, you must find out if you've won the jackpot.

// To do this, you must first count the 'mini-wins' on your ticket.Each subarray has both a string and a number within it.If the character code of any of the characters in the string matches the number, you get a mini win.Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided(win).If your total is more than or equal to(win), return 'Winner!'.Else return 'Loser!'.

function bingo(ticket, win) {

    let count = 0

    ticket.forEach(n => {
        let letter = n[0]
        let code = n[1]

        for (let i = 0; i < letter.length; i++) {
            if (letter[i].charCodeAt() === code) {
                count++
            }
        }
    })

    return count >= win ? 'Winner!' : 'Loser!'
}
