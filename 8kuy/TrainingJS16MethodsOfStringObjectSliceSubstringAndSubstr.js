//https://www.codewars.com/kata/57274562c8dcebe77e001012/

function cutIt(arr){
    let shortest = arr.map((el, i) => el.length);
    shortest = Math.min(...shortest);
    return arr.map(el => el.slice(0, shortest));
}