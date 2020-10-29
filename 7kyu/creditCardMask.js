//https://www.codewars.com/kata/5412509bd436bd33920011bc/

const maskify = cc => {
    let res = cc.slice(-4);
    let temp = '';
    for (let i = 0; i < cc.length - 4; i++) {
        temp += '#';
    }
    return temp + res;
}