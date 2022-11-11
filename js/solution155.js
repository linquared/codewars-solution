// 7kyu- We want to generate a function that computes the series starting from 0 and ending until the given number.
var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      // for
        //while
        let sum = 0
        let result = []
      for(i = 0; i <= count; i++){
        sum += i
        result.push(i)
      }

      return `${result.join('+')} = ${sum}`

    };
  
    return SequenceSum;
  
  })();
