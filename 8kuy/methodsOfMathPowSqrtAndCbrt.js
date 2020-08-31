//https://www.codewars.com/kata/5733f948d780e27df6000e33/

function cutCube(volume,n){
    let res = Number.isInteger(Math.cbrt(n));
    let div = Number.isInteger(Math.cbrt(volume / n));
    return (res && div);
}