//https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = arr => {
    let b = arr.join('');
    let res = parseInt(b, 2);
    return res;
};