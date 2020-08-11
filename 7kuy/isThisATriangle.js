//https://www.codewars.com/kata/56606694ec01347ce800001b/

function isTriangle(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        if (((a + b) > c) && ((a + c) > b) && ((b + c) > a)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}