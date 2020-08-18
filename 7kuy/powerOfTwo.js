//https://www.codewars.com/kata/534d0a229345375d520006a0/

function isPowerOfTwo(n){
    let res;
    for (let i = 0; i < n; i++) {
        res = Math.pow(2, i);
        if (res === n) return true;
    }
    return false;
}