// 8kyu- Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
    newX = x.replace(/4|3|2|1/g, 0);
     newNewX = newX.replace(/5|6|7|8|9/g, 1);
     return newNewX;
   }

