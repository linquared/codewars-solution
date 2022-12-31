// 7kyu-Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.
function duplicateElements(m, n) {
  return m.some(num => n.includes(num))
}