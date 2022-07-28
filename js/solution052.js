
// 7Kyu -n this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
function solve(s){
    return s.replace(/[^A-Z]/g, '').length > s.replace(/[^a-z]/g, '').length ? s.toUpperCase() : s.toLowerCase()
  }
  