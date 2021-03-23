// https://www.codewars.com/kata/57faece99610ced690000165/

function remove(s){
  let h = s.split('');
  for (let i = h.length - 1; i > 0; i--) {
    if (h[i] === '!') h.pop();
    else return h.join('');
  }
}