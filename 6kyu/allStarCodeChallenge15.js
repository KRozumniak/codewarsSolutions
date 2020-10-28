//https://www.codewars.com/kata/586560a639c5ab3a260000f3/

function rotate(str){
    let strOutput = str;
    let letter = '';
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        letter = strOutput.slice(0, 1);
        strOutput = strOutput.slice(1, ) + letter;
        arr.push(strOutput);
    }
    return arr;
}