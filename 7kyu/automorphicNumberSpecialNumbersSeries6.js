//https://www.codewars.com/kata/5a58d889880385c2f40000aa/

function automorphic(n){
    let strN = Math.pow(n, 2).toString();
    n = n.toString();
    return strN.endsWith(n) ? "Automorphic" : "Not!!";
}