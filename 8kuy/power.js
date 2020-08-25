//https://www.codewars.com/kata/562926c855ca9fdc4800005b/

function numberToPower(number, power){
    let count = 1;
    let pow = 1;
    do {
        count++;
        pow = pow * number;
    } while (count <= power);
    if (power === 0) return 1;
    return pow;
}