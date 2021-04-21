// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/

function arithmetic(a, b, operator){
  const operObj = {
    'add': a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide': a / b,
  }
  return operObj[operator];
}