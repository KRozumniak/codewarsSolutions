//https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/

function calculate(string) {
    let numbers = string.split(' ').map(el => +el).filter(el => el === el);
    let res = 0;
    if (string.includes('loses')) res = numbers[0] - numbers[1];
    else res = numbers[0] + numbers[1];
    return res;
}