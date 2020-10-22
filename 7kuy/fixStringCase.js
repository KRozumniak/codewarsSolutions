//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/

function solve(s){
    let upper = s.toUpperCase();
    let lower = s.toLowerCase();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (upper[i] === s[i]) count++;
    }
    return (s.length / 2 >= count) ? lower : upper;
}