//https://www.codewars.com/kata/57277a31e5e51450a4000010/

function firstToLast(str,c){
    let first = str.indexOf(c);
    let last  = str.lastIndexOf(c);
    if((first === -1) || (last === -1)) {
        return -1;
    }
    return last - first;
}