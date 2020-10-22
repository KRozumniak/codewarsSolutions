//https://www.codewars.com/kata/534ea96ebb17181947000ada

function breakChocolate(n,m) {
    let res = n * m - 1;
    if (res <= 0) {
        return 0;
    } else {
        return res;
    }
}