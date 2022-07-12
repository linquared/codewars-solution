// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:


function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf') 
    position == 0 ? console.log("Pls go away and stop eating my sheep")  : console.log(`Oi! Sheep number ${position}! You are about to be eaten by a wolf!`)
  
  }
  
  