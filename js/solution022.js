
// Your task is to return number of people who are still in the bus after the last bus station (after the last array)
var number = function(busStops){
  return (busStops.map(num => num[0]).reduce((acc, curr) => acc + curr)) - (busStops.map(num => num[1]).reduce((acc, curr) => acc + curr)) 
}

