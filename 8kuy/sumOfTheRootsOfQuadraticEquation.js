//https://www.codewars.com/kata/57d448c6ba30875437000138/solutions/javascript


function roots(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d >= 0) {
        return +(-b / a).toFixed(2);
    } else {
        return null;
    }
}