// https://www.codewars.com/kata/5713bc89c82eff33c60009f7/

function toFreud(string) {
    return string.length ? string.split(' ').map(el => 'sex').join(' ') : '';
}