// 8kyu You receive an array with your peers' test scores. Now calculate the average and compare your score!

function betterThanAverage(classPoints, yourPoints) {
    return (((classPoints.reduce((acc, curr) => acc + curr)) + yourPoints) / (classPoints.length + 1)) > yourPoints ? false : true
}