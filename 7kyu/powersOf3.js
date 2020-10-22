//https://www.codewars.com/kata/57be674b93687de78c0001d9/

function largestPower(n){
    let res = 1;
    for (let i = -1; i < n; i++) {
        if (3 ** i < n) res = i;
        else break;
    }
    return res;
}