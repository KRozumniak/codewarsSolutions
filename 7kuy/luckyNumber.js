// https://www.codewars.com/kata/55afed09237df73343000042

function isLucky(n) {
    n = String(n);
    let res = 0;
    for (let i = 0; i < n.length; i++) {
        res += n[i];
    }
    if (res % 9 === 0 || res === 0) {
        return true;
    } else {
        return false;
    }
}