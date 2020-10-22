//https://www.codewars.com/kata/55908aad6620c066bc00002a/

function XO(str) {
    let modifiedStr = str.toLowerCase();
    let x = 0;
    let o = 0;
    for (let el of modifiedStr) {
        if (el === 'x') x++;
        else if (el === 'o') o++;
    }
    return x === o;
}