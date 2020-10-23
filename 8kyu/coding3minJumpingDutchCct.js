//https://www.codewars.com/kata/570bcd9715944a2c8e000009/

function sc(floor){
    let voice1 = 'Aa~ ';
    let voice2 = 'Pa!';
    let voice3 = 'Aa!';
    if (floor <= 1) return '';
    else if (floor <= 6) return `${voice1.repeat(floor - 1).trim()} ${voice2} ${voice3}`;
    else return `${voice1.repeat(floor - 1).trim()} ${voice2}`;
}