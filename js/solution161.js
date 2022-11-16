// 7kyu- You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop. Your task is to return number of people who are still in the bus after the last bus station (after the last array). 
var number = function(busStops){
    let numOnBus = busStops.map(num => num[0]).reduce((a, c) => a+c)
    let numLeftBus = busStops.map(num => num[1]).reduce((a, c) => a+c)
    return numOnBus - numLeftBus
  }