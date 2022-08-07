// 7kyu You will be given a number and you will need to return it as a string in Expanded Form
const expandedForm = n => n.toString()
                          .split('')
                          .reverse()
                          .map((num, i) => num * Math.pow(10, i))
                          .filter(num => (num) > 0)
                          .reverse()
                          .join(" + ")


