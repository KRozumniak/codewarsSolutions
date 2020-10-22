//https://www.codewars.com/kata/5729b103dd8bac11a900119e/

function fiveLine(s){
    let str = s.trim();
    let str1 = str;
    let n = '\n'
    for (let i = 2; i <= 5; i++) {
        str += n;
        for (let j = i; j > 0; j--) {
            str += str1;
        }
    }
    return str;
}