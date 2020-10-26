//https://www.codewars.com/kata/568dc69683322417eb00002c/

function tripleX(str){
    let index = str.indexOf('x');
    return str[index] + str[index + 1] + str[index + 2] === 'xxx';
}