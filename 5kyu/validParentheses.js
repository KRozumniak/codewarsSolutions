// https://www.codewars.com/kata/52774a314c2333f0a7000688/

// Valid Parentheses

/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
 */

function validParentheses(parens) {
  function peek(stack) {
    return stack[stack.length - 1];
  }

  const stack = [];
  for (let i = 0; i < parens.length; i++) {
    if (parens.charAt(i) === '(') {
      stack.push(parens.charAt(i))
    } else if (stack.length === 0) {
      return false;
    } else if (parens.charAt(i) === ')') {
      if (peek(stack) === '(') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}