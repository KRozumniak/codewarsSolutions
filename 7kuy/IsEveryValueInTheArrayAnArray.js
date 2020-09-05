//https://www.codewars.com/kata/582c81d982a0a65424000201/

const arrCheck = value => {
    for (let el of value){
        if (!Array.isArray(el)) return false;
    }
    return true;
}