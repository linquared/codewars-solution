// 8kyu- You get any card as an argument. Your task is to return the suit of this card (in lowercase).
function defineSuit(card) {
if(card[card.split('').length-1] == '♣'){
    return 'clubs'
}else if(card[card.split('').length-1] == '♦'){
    return 'diamonds'
}else if(card[card.split('').length-1] == '♥'){
    return 'hearts'
}else{
    return 'spades'
}

}
