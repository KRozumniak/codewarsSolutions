//https://www.codewars.com/kata/525f50e3b73515a6db000b83/

function createPhoneNumber(numbers){
    let str = numbers.join('');
    return `(${str.slice(0, 3)}) ${str.slice(3,6)}-${str.slice(6)}`
}