//https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/

function warnTheSheep(q) {
    let w = q.indexOf('wolf');
    if (w === q.length - 1) return "Pls go away and stop eating my sheep";
    else return `Oi! Sheep number ${(q.length - q.indexOf('sheep', w))}! You are about to be eaten by a wolf!`;
}