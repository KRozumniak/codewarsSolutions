//https://www.codewars.com/kata/557b5e0bddf29d861400005d

function converter (mpg) {
    let kmpl;
    let litr;
    litr = mpg / 4.54609188;
    kmpl = (litr * 1.609344).toFixed(2);
    return +kmpl;
}